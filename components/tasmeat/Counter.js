import { useState } from "react";
import { formatTime } from "../../utils";

const Counter = () => {
  const [counterIsStart, setCounterIsStart] = useState(false);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  let counterInterval;
  let time = 0;

  function counter() {
    time += 1;

    setHour(Math.floor(time / 3600));
    setMin(Math.floor(time / 60));
    setSec(Math.floor(time % 60));
  }

  const handleStart = () => {
    if (counterIsStart) {
      clearInterval(counterInterval);
      setCounterIsStart(false);
      setHour(0);
      setMin(0);
      setSec(0);
      time = 0;
      return;
    }

    setCounterIsStart(true);

    counterInterval = setInterval(counter, 1000);
  };

  return (
    <>
      <div className="clock">
        {formatTime(hour)}:{formatTime(min)}:{formatTime(sec)}
      </div>
      <div className="clock-tools">
        <button className="secondary" onClick={handleStart}>
          {counterIsStart ? "إيقاف" : "بدء"}
        </button>
      </div>
    </>
  );
};

export default Counter;
