import React,{useState,useEffect} from 'react';

export const SetIntervalek1=()=>{
    const [count,setCount]= useState(0)
    
     useEffect(()=>{
        let counter=setInterval(()=>{
          count===10?setCount(0):setCount(count+1);
        },1000)
        return ()=>clearInterval(counter)
     })
    return(
        <>
         <h1>{count}</h1>
        </>
    )
}