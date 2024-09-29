import { useEffect, useState } from 'react';
import './SplashScreen.css';

function SplashScreen({ onLoadComplete }) {
    const [loadingProgress, setLoadingProgress] = useState(0);

    useEffect(() => {
        let progress = 0; // Initialize progress value

        // Simulate the loading process
        const progressInterval = setInterval(() => {
            progress += 33.33;
            setLoadingProgress(progress);
            if (progress >= 100) {
                clearInterval(progressInterval);
                onLoadComplete(); // Call this function when loading is complete
            }
        }, 1000);

        // Cleanup intervals to prevent memory leaks
        return () => {
            clearInterval(progressInterval);
        };
    }, [onLoadComplete]);

    return (
        <div className="splash-screen">
            <img src="/image/1.png" alt="Opel Stop Logo" className="splash-logo" />
            <div className="loading-bar">
                <div
                    className="loading-progress"
                    style={{ width: `${loadingProgress}%` }}
                />
            </div>
            <p className="loading-text">Loading... {Math.round(loadingProgress)}%</p>
        </div>
    );
}

export default SplashScreen;
