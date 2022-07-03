import { useEffect, useState } from "react";
import { formatTime } from "../../utils";

const StopWatch = () => {
  const [counterIsStart, setCounterIsStart] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (counterIsStart) {
      interval = setInterval(counter, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [counterIsStart]);

  function counter() {
    setTime((prev) => prev + 1);
  }

  const handleStart = () => {
    if (counterIsStart) {
      setCounterIsStart(false);
      setTime(0);
      return;
    }

    setCounterIsStart(true);
  };

  return (
    <>
      <div className="clock">
        {formatTime(Math.floor(time / 3600))}:
        {formatTime(Math.floor(time / 60))}:{formatTime(Math.floor(time % 60))}
      </div>
      <div className="clock-tools">
        <button className="secondary" onClick={handleStart}>
          {counterIsStart ? "إيقاف" : "بدء"}
        </button>
      </div>
    </>
  );
};

export default StopWatch;