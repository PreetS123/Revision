import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let [hrs,setHrs]= useState(0);
  let [min,setMin]= useState(0);
  let [sec,setSec]= useState(0);
  let [mili,setMili]= useState(0);
   let [stop,setStop]= useState(false);

  const handleClick=()=>{
       setStop(true);
       setMili(mili+1);
  }
  const onStop=()=>{
    setStop(false);
  }

  const onReset=()=>{
    setHrs(0);
    setMin(0);
    setSec(0);
    setMili(0);
  }

    useEffect(()=>{
      let interval=null;
      if(stop){
        interval= setInterval(()=>{
          if(min>59){
            setHrs(hrs+1);
            setMin(0);
            clearInterval(interval);
          }
          if(sec>59){
             setMin(min+1);
             setSec(0);
             clearInterval(interval);
          }
          if(mili>99){
            setSec(sec+1);
            setMili(0);
            clearInterval(interval);
          }
          if(mili<=99){
            setMili(mili+1);
          }
        },0.0001)
      }else{
        clearInterval(interval)
      }
      return ()=>{
        clearInterval(interval);
      }
    })
    

  return (
    <div className="App">
      <h2>{hrs} {min} {sec} {mili}</h2>
    <button onClick={handleClick} >Start</button>
    <button  onClick={onStop} >Stop</button>
    <button onClick={onReset} >Reset</button>
    </div>
  );
}

export default App;
