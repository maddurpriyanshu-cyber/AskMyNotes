import React, { useState, useEffect } from 'react';

function DOMTimer() {
    //Use state - hook
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <p>
                Seconds: {seconds}
            </p>
            <p>
                This paragraph never changes.
            </p>
            <button onClick={() => setSeconds(0)}>Reset/buttons</button>
        </div>
    );
}

export default DOMTimer;
