'use client'
import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate?: string; // Target date in "YYYY-MM-DD" format
}

const Countdown: React.FC<CountdownProps> = ({ targetDate = '2024-01-07' }) => {
  const calculateTimeRemaining = () => {
    const targetTime = new Date(targetDate).getTime();
    const currentTime = new Date().getTime();
    const timeRemaining = targetTime - currentTime;

    if (timeRemaining <= 0) {
      // If the target date has passed, return all zeros
      return {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
      };
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return {
      days: days.toString().padStart(2, '0'),
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]); // Add targetDate as a dependency for useEffect

  return (
    <div className="text-center p-8  text-white">
      <div className="flex justify-center gap-2 space-x-4">
        <div className="lg:text-8xl md:text-7xl text-4xl font-bold">
          {timeRemaining.days}:
          <div className="lg:text-base md:text-sm text-xs">Days</div>
        </div>
        <div className="lg:text-8xl md:text-7xl text-4xl font-bold">
          {timeRemaining.hours}:
          <div className="lg:text-base md:text-sm text-xs">Hours</div>
        </div>
        <div className="lg:text-8xl md:text-7xl text-4xl font-bold">
          {timeRemaining.minutes}:
          <div className="lg:text-base md:text-sm text-xs">Minutes</div>
        </div>
        <div className="lg:text-8xl md:text-7xl text-4xl font-bold">
          {timeRemaining.seconds}
          <div className="lg:text-base md:text-sm text-xs ">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
