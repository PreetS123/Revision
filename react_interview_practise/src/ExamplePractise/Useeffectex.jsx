import React,{useState,useEffect} from 'react'

export const Useeffectex = () => {
    const [count,setCount]= useState(0);
    
    useEffect(()=>{
       console.log('mounted')
    },[count])
  return (
    <div style={{display:'flex',gap:'20px',height:'50px',width:'30%',margin:'50px auto'}}>
        
        <button onClick={()=>setCount(count+1)}>+</button>
        <h2>{count}</h2>
        <button onClick={()=>setCount(count-1)}>-</button>
    </div>
  )
}
