import React, { useState, useEffect } from "react";

export const Timer = () => {
  const [stop, setStop] = useState(false);
  const [hrs, setHrs] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [mili, setMili] = useState(0);

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
        if(stop){
        if(min>59){
            setHrs(hrs+1);
            setMin(0);
        }
        if(sec>59){
            setMin(min+1);
            setSec(0);
        }
      if (mili > 99) {
        setSec(sec + 1);
        setMili(0);
      }
      if (mili <= 99) {
        setMili(mili + 1);
      } else {
        clearInterval(interval);
      }
    }
    }, 0.001);
    return () => {
      clearInterval(interval);
    };
  });

  const handleStart=()=>{
    setStop(true)
  }
  const handlePause=()=>{
    setStop(false)
  }
  const handleStop=()=>{
    setStop(false);
    setHrs(0);
    setMin(0);
    setSec(0);
    setMili(0);
  }

  return (
    <>
      <div>
        <p>
          {hrs} : {min} : {sec} : {mili}
        </p>
      </div>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </>
  );
};
