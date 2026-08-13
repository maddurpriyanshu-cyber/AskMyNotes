import React, { useState, useEffect } from 'react';

function VisitTimer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <p>Visit Duration: {seconds} seconds</p>
            <button onClick={() => setSeconds(0)}>Reset</button>
        </div>
    );
}

export default VisitTimer;
