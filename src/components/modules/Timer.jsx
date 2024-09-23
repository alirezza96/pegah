"use client"

import { useEffect, useState } from "react"

export default function Timer({ title, seconds }) {
    const [timeLeft, setTimeLeft] = useState(seconds)
    useEffect(() => {
        if (timeLeft === 0) return
        const timerInterval = setInterval(() => {
            setTimeLeft(timeLeft - 1)
        }, 1000)
        return () => clearInterval(timerInterval)
    }, [timeLeft])

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60)
        const seconds = time % 60
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
    }

    return (
        <div className="text-center my-4">
            <p className="text-sm">
                <span className=" inline-block w-8  text-ltr">
                    {formatTime(timeLeft)}
                </span>
                <span className="mx-1">
                    {title}
                </span>
            </p>
        </div>
    )


}