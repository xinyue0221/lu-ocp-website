'use client'

import { useState, useEffect } from 'react'

export default function MysteryUnlock() {
  const [enteredSolution, setEnteredSolution] = useState('')
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [attempts, setAttempts] = useState(0)
  const [hint, setHint] = useState('')
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  
  // The correct answers to the enigmas - these are extremely challenging
  // Enigma I: Monday = 2 (Tyr/Mars' day, II in Roman numerals which is 2 backwards, lithium atomic weight is 6.94)
  // Enigma II: April = 4 (perfection squared (3² = 9) + new beginnings (1) = 10, alchemy fire element, male symbols ♂ multiplied)
  // Enigma III: 3:14 PM (Pi time, the transcendental number, Archimedes approximated pi, 1 in octal doubled is 2)
  
  // Calculate countdown once unlocked
  useEffect(() => {
    if (!isUnlocked) return
    
    const targetDate = new Date('2025-04-07T15:14:00-07:00') // April 7th, 2025 at 3:14 PM PDT
    
    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }
    
    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    
    return () => clearInterval(timer)
  }, [isUnlocked])
  
  const handleSolutionCheck = (e: React.FormEvent) => {
    e.preventDefault()
    setAttempts(attempts + 1)
    
    const userAnswer = enteredSolution.toLowerCase().trim()
    
    // Check for key concepts and terms rather than exact matches
    // For Enigma I - Looking for indicators of 2, Monday, II, Mars, Tyr, etc.
    const hasDay = /\b(2|two|ii|monday|mars|tyr|second)\b/.test(userAnswer) ||
                   userAnswer.includes('2°') || 
                   userAnswer.includes('2nd') ||
                   userAnswer.includes('second day');
    
    // For Enigma II - Looking for indicators of 4, April, four, etc.
    const hasMonth = /\b(4|four|iv|april|quad|fourth)\b/.test(userAnswer) ||
                     userAnswer.includes('4th') ||
                     userAnswer.includes('month 4');
                     
    // For Enigma III - Looking for indicators of 3:14, pi time, etc.
    const hasTime = /\b(3:14|3\.14|pi|π|314)\b/.test(userAnswer) ||
                    userAnswer.includes('3:14 pm') || 
                    userAnswer.includes('3:14 p.m.') ||
                    userAnswer.includes('15:14');
    
    // For the full date - Looking for comprehensive understanding
    const hasFullDate = userAnswer.includes('april 7') || 
                        userAnswer.includes('7th') || 
                        userAnswer.includes('april 7th') ||
                        userAnswer.includes('07/04') ||
                        userAnswer.includes('7/4');
    
    // Determine different levels of correctness
    const isPartiallyCorrect = hasDay || hasMonth || hasTime;
    const isMostlyCorrect = (hasDay && hasMonth) || (hasMonth && hasTime) || (hasDay && hasTime);
    const isFullyCorrect = (hasDay && hasMonth && hasTime) || hasFullDate;
    const isPerfectSolution = (hasDay && hasMonth && hasTime && hasFullDate);
    
    if (isFullyCorrect) {
      setIsUnlocked(true)
      setHint('')
    } else {
      // Provide increasingly detailed hints based on correctness and attempts
      let newHint = '';
      
      if (!isPartiallyCorrect) {
        newHint = 'Your interpretation appears flawed. Consider the riddles more carefully.';
      } else if (isPartiallyCorrect && !isMostlyCorrect) {
        newHint = 'You have grasped one aspect of the temporal equation. Seek the connections among mythology, numerical systems, and universal constants.';
        
        // Add targeted hint after multiple attempts
        if (attempts >= 3) {
          const missing = [];
          if (!hasDay) missing.push('the day of lunar rebirth');
          if (!hasMonth) missing.push('the fourth phase of the solar cycle');
          if (!hasTime) missing.push('the moment when rationality transcends into irrationality');
          newHint += ' Contemplate: ' + missing.join(', ');
        }
      } else if (isMostlyCorrect) {
        newHint = 'Your solution nears completeness, but still lacks precision.';
        
        // Be more direct after several attempts
        if (attempts >= 3) {
          if (!hasDay) newHint += ' Consider the position of Monday in the ancient week.';
          if (!hasMonth) newHint += ' Recall the fourth month of the Gregorian calendar.';
          if (!hasTime) newHint += ' Think of the mathematical constant that begins with 3.14.';
        }
      }
      
      // Emergency escape hatch after many attempts
      if (attempts >= 6) {
        newHint = 'When all paths converge: The 7th day of April (4), at exactly 3:14 PM Pacific Time.';
      }
      
      setHint(newHint);
    }
  }
  
  // Format numbers with leading zeros
  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0')
  }
  
  return (
    <div className="mb-12">
      {!isUnlocked ? (
        <div className="bg-[#1a1a2e] p-6 rounded-lg border border-[#e94560]">
          <h3 className="text-xl font-bold mb-4 text-[#e94560]">🔒 Quantum Encryption Barrier</h3>
          <form onSubmit={handleSolutionCheck} className="space-y-4">
            <div>
              <label htmlFor="solution" className="block text-white mb-2">Enter your decryption key:</label>
              <textarea 
                id="solution"
                value={enteredSolution}
                onChange={(e) => setEnteredSolution(e.target.value)}
                placeholder="Express your full understanding of when the temporal gateway will open..."
                className="w-full p-3 bg-[#0f3460] border border-[#e94560] rounded text-white focus:outline-none focus:ring-2 focus:ring-[#e94560] h-24"
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-[#e94560] text-white py-3 rounded font-medium hover:bg-[#e43f5a] transition-colors"
            >
              Attempt Quantum Breach {attempts > 0 && `(Attempt ${attempts})`}
            </button>
            {hint && (
              <div className="mt-4 p-3 bg-[#0f3460] rounded">
                <p className="text-white text-sm">{hint}</p>
              </div>
            )}
            {attempts >= 3 && !isUnlocked && (
              <div className="mt-4 p-3 bg-[#0f3460] rounded border-t border-[#e94560]">
                <p className="text-gray-400 text-xs italic">Quantum analysis suggests a convergence of solutions involving the day following Sunday, the month of showers, and the time when circles achieve mathematical transcendence.</p>
              </div>
            )}
          </form>
        </div>
      ) : (
        <div className="bg-[#1a1a2e] p-6 rounded-lg border-2 border-[#e94560] relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#e94560] text-white px-4 py-1 rounded-full text-sm font-bold">
            🔓 QUANTUM BARRIER BREACHED
          </div>
          <h3 className="text-xl font-bold mb-4 text-center text-[#e94560]">Temporal Countdown Initiated</h3>
          
          <div className="grid grid-cols-4 gap-4 text-center">
            <div className="bg-[#0f3460] p-4 rounded">
              <div className="text-3xl font-bold text-white">{formatNumber(timeLeft.days)}</div>
              <div className="text-sm text-gray-400">Days</div>
            </div>
            <div className="bg-[#0f3460] p-4 rounded">
              <div className="text-3xl font-bold text-white">{formatNumber(timeLeft.hours)}</div>
              <div className="text-sm text-gray-400">Hours</div>
            </div>
            <div className="bg-[#0f3460] p-4 rounded">
              <div className="text-3xl font-bold text-white">{formatNumber(timeLeft.minutes)}</div>
              <div className="text-sm text-gray-400">Minutes</div>
            </div>
            <div className="bg-[#0f3460] p-4 rounded">
              <div className="text-3xl font-bold text-white">{formatNumber(timeLeft.seconds)}</div>
              <div className="text-sm text-gray-400">Seconds</div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-[#0f3460] rounded text-center">
            <p className="text-white">
              <span className="text-[#e94560] font-bold">TRANSMISSION DECODED</span>: The veil between potential and destiny shall part on <span className="text-[#e94560] font-bold">Monday, April 7th at 3:14 PM (PDT)</span>
            </p>
            <p className="text-xs text-gray-400 mt-2 italic">
              "In the quantum field of possibility, all futures converge to this singular moment."
            </p>
          </div>
        </div>
      )}
    </div>
  )
} 