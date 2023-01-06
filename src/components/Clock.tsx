import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date().toTimeString().slice(0, 8));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toTimeString().slice(0, 8));
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="clock-container">
      <p style={{ color: "white", fontFamily: "sans-serif" }}>{time}</p>
    </div>
  );
};

export default Clock;
