import { useEffect, useState } from 'react';
import './SplashScreen.css';

function SplashScreen(onLoadComplete ) {
    const [loadingProgress, setLoadingProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            onLoadComplete();
        }, 3000);

        const progressInterval = setInterval(() => {
            setLoadingProgress((prev) => {
                const newProgress = prev + 33.33;
                return newProgress > 100 ? 100 : newProgress;
            });
        }, 1000);

        return () => {
            clearTimeout(timer);
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

export default SplashScreen