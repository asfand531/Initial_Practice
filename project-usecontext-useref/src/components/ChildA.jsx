import { useRef, useState } from "react";
import ChildB from "./ChildB";

const ChildA = () => {
  const [timer, setTimer] = useState(0);

  const timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  const resetTimer = () => {
    stopTimer();
    setTimer(0);
  };

  return (
    <div>
      <h1>Stop Watch</h1>
      <h2 ref={timerRef}>{timer} seconds</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
      Child A
      <ChildB />
    </div>
  );
};

export default ChildA;
