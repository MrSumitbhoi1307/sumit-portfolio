
import { useEffect, useState } from "react";
import "./LoadingScreen.css";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Reset loading progress whenever the component starts
    setProgress(0);

    const duration = 5000;
    const start = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const next = Math.min(
        100,
        Math.round((elapsed / duration) * 100)
      );

      setProgress(next);

      if (next >= 100) {
        clearInterval(timer);
        onComplete();
      }
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="loading-screen">
      <div className="loading-orbit orbit-one" />
      <div className="loading-orbit orbit-two" />

      <div className="loading-content">
        <div className="loading-logo">SB</div>

        <h1 className="loading-name">
          SUMIT <span>BHOI</span>
        </h1>

        <p className="loading-role">
          FULL STACK <span>MERN DEVELOPER</span>
        </p>

        <div
          className="loading-track"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
        >
          <div
            className="loading-progress"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="loading-percent">{progress}%</p>

        <p className="loading-tagline">
          BUILDING DIGITAL EXPERIENCES...
        </p>
      </div>
    </div>
  );
}
