"use client"

import React, { useState, useEffect } from "react"
import { countdownTime } from "@lib/util/countdown"
import { useCountdownContext } from "@lib/context/countdown-context"

const CountdownTimer = () => {
  const { targetDate } = useCountdownContext()
  const [timeLeft, setTimeLeft] = useState(countdownTime(targetDate))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(countdownTime(targetDate))
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="countdown-time flex items-center gap-5 max-sm:gap-[18px]">
      {/* Days */}
      <div className="item flex flex-col items-center">
        <div className="days time heading1">
          {timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}
        </div>
        <div className="font-medium text-button-uppercase">Days</div>
      </div>
      <span> : </span>
      {/* Hours */}
      <div className="item flex flex-col items-center">
        <div className="hours time heading1">
          {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
        </div>
        <div className="text-button-uppercase font-medium">Hours</div>
      </div>
      <span> : </span>
      {/*Minutes */}
      <div className="item flex flex-col items-center">
        <div className="minutes time heading1">
          {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}
        </div>
        <div className="font-medium text-button-uppercase">Minutes</div>
      </div>
      <span> : </span>
      {/* Seconds */}
      <div className="item flex flex-col items-center">
        <div className="seconds time heading1">
          {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
        </div>
        <div className="font-medium text-button-uppercase">Seconds</div>
      </div>
    </div>
  )
}

export default CountdownTimer
