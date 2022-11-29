import './App.css';
import { useEffect, useState } from 'react';

function App() {
    let [stop,setStop]= useState(false);
    let [hrs,setHrs]= useState(0);
    let [min,setMin]= useState(0);
    let [sec,setSec]= useState(0);
    let [mili,setMili]= useState(0)
   
    const onStart=()=>{
        setStop(true);
    }
    const onReset=()=>{
       setStop(false)
    }

    const onStop=()=>{
      setStop(false)
      setHrs(0);
      setMin(0);
      setSec(0);
      setMili(0)
    }

    useEffect(()=>{
      let interval=null;
      if(stop){
        interval=setInterval(()=>{
            if(min>59){
              setHrs(hrs+1)
              setMin(0);
            }
           if(sec>59){
            setMin(min+1)
            setSec(0);
           }
           if(mili>99){
            setSec(sec+1);
            setMili(0);
           }
           if(mili<=99){
            setMili(mili+1)
           }else{
            clearInterval(interval);
           }
        },0.001)
          
        return ()=>{
          clearInterval(interval)
        }
      }
     
    })

  return (
    <div className="App">
      <h1>{hrs} : {min} : {sec} : {mili}</h1>
      <button onClick={onStart}>Start</button>
      <button onClick={onReset}>Pause</button>
      <button onClick={onStop}>Stop</button>
    </div>
  );
}

export default App;
