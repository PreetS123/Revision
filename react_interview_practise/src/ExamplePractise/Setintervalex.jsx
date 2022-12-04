import React,{useEffect, useState} from 'react'

export const Setintervalex = () => {
  let [timer,setTimer]= useState(0);


  useEffect(()=>{
   console.log(timer)
   let id= setInterval(()=>{  
    if(timer===3){
        setTimer(0)
      }
   else setTimer(timer+1);
   
  },1000)
      return ()=>{
        clearInterval(id)
      }
      
  },[timer])

  return (
    <div>
        <div>{timer}</div>
        {/* <button onClick={handleTimer}>Start</button> */}
        {/* <button onClick={handleTimer}>Clear</button> */}
    </div>
  )
}
