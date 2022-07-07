import { useEffect, useState } from "react";
import { formatTime } from "../../utils";

const StopWatch = ({ timeRef, setDisabled }) => {
  const [counterIsStart, setCounterIsStart] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (counterIsStart) {
      interval = setInterval(counter, 1000);
    } else {
      clearInterval(interval);
      timeRef.current = time;
    }

    return () => clearInterval(interval);
  }, [counterIsStart]);

  function counter() {
    setTime((prev) => prev + 1);
  }

  const handleStart = () => {
    if (counterIsStart) {
      setCounterIsStart(false);
      setDisabled(false);
      return;
    }

    setCounterIsStart(true);
    setTime(0);
  };

  return (
    <>
      <div className="clock">
        {formatTime(Math.floor(time / 3600))}:
        {formatTime(Math.floor((time / 60) % 60))}:
        {formatTime(Math.floor(time % 60))}
      </div>
      <div className="clock-tools">
        <button className="secondary" type="button" onClick={handleStart}>
          {counterIsStart ? "إيقاف" : "بدء"}
        </button>
      </div>
    </>
  );
};

export default StopWatch;
