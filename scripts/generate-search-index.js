const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Function to recursively find all page.tsx files
function findPages(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Ignore node_modules and .next directories
      if (path.basename(filePath) !== 'node_modules' && path.basename(filePath) !== '.next') {
        findPages(filePath, fileList);
      }
    } else if (file === 'page.tsx') {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Function to extract text content from a React component file
// This is a simplified extractor and might need refinement
function extractContent(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    // Basic extraction: try to get text within JSX elements
    // This is highly simplified and won't perfectly parse complex components
    const textMatches = fileContent.match(/>([^<]+)</g) || [];
    let text = textMatches.map(match => match.substring(1, match.length - 1).trim()).join(' ');
    // Clean up common boilerplate/links and extra whitespace
    text = text.replace(/Read more →|← Back to home|← Back to news/gi, '');
    text = text.replace(/\s{2,}/g, ' ').trim(); // Replace multiple spaces with single space
    return text;
  } catch (error) {
    console.warn(`Could not process file ${filePath}: ${error.message}`);
    return '';
  }
}

// Function to extract the title (h1) from a page
function extractTitle(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const h1Match = fileContent.match(/<h1.*?>(.*?)<\/h1>/i);
    if (h1Match && h1Match[1]) {
      // Clean potential JSX/HTML within h1
      const dom = new JSDOM(`<h1>${h1Match[1]}</h1>`);
      return dom.window.document.querySelector('h1').textContent.trim();
    }
    // Fallback to directory name if no h1
    let dirName = path.basename(path.dirname(filePath));
    // Capitalize first letter and replace hyphens with spaces
    dirName = dirName.charAt(0).toUpperCase() + dirName.slice(1).replace(/-/g, ' ');
    return dirName || 'Page';
  } catch (error) {
    console.warn(`Could not extract title from ${filePath}: ${error.message}`);
    return path.basename(path.dirname(filePath)) || 'Page';
  }
}

console.log('Generating search index...');
const projectRoot = path.join(__dirname, '..');
const appDir = path.join(projectRoot, 'app');
const pageFiles = findPages(appDir);

const searchIndex = pageFiles
  .map(filePath => {
    const relativePath = path.relative(appDir, filePath);
    // Convert file path to URL path
    let urlPath = '/' + relativePath.replace(/\\/g, '/').replace(/\/page\.tsx$/, '').replace(/\/$/, '');
    // Handle index route
    if (urlPath === '/.') urlPath = '/'; // Adjust for base path

    const title = extractTitle(filePath);
    const content = extractContent(filePath);

    // Exclude pages with no useful content or specific pages like search/layout/api
    if (!content || !urlPath || urlPath.includes('/search') || urlPath.includes('/api')) {
      console.log(`Excluding: ${urlPath || filePath} (No content or excluded path)`);
      return null;
    }

    console.log(`Indexing: ${urlPath} - ${title}`);
    return {
      title,
      path: urlPath,
      content
    };
  })
  .filter(Boolean); // Remove null entries

const outputDir = path.join(projectRoot, 'public');
const outputFile = path.join(outputDir, 'search-index.json');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

fs.writeFileSync(outputFile, JSON.stringify(searchIndex, null, 2));

console.log(`Search index generated at ${outputFile} with ${searchIndex.length} entries.`); 