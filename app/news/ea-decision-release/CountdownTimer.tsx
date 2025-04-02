'use client'

import { useEffect, useState } from 'react'

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
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
  }, [])

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-8 border border-[#2c5282]">
      <h3 className="text-xl font-bold mb-4 text-center text-[#2c5282]">Countdown to Decision Release</h3>
      <div className="grid grid-cols-4 gap-4 text-center">
        <div>
          <div className="text-3xl font-bold text-[#2c5282]">{timeLeft.days}</div>
          <div className="text-sm text-gray-600">Days</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-[#2c5282]">{timeLeft.hours}</div>
          <div className="text-sm text-gray-600">Hours</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-[#2c5282]">{timeLeft.minutes}</div>
          <div className="text-sm text-gray-600">Minutes</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-[#2c5282]">{timeLeft.seconds}</div>
          <div className="text-sm text-gray-600">Seconds</div>
        </div>
      </div>
      <p className="text-center mt-4 text-sm text-gray-500">
        Decisions will be released on April 7th at 3:14 PM (PDT)
      </p>
    </div>
  )
} 