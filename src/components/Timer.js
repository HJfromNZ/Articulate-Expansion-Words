import React, {useState, useEffect} from 'react'

const Timer = ({seconds}) => {

    const [remainingTime, setRemainingTime] = useState(seconds);

    useEffect(() => {
        if (!remainingTime) return;

        const intervalId = setInterval(() => {
            setRemainingTime(remainingTime - 1)
        }, 1000);

        return () => clearInterval(intervalId)
    }, [remainingTime])

    return (
        <span>
            Time Remaining: {remainingTime}
        </span>
    )
}

export default Timer
