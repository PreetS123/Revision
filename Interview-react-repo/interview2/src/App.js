import { useState } from "react";

function App() {
  const [inpVal,setInpVal]= useState('');
  const [count,setCount]= useState(0);
  const Increment=(val)=>{
    // console.log(val);
    if(count<10 ){
       setCount(count+val);
    }
  }
  const Decrement=(val)=>{
    // console.log(val);
    if(count>0 ){
       setCount(count+val);
    }
  }

  return (
    <div>
      <div>
        <input  type='text'  placeholder={`${count}`} value={count} />
      </div>
           <button onClick={()=>Increment(1)}>Increment</button>
           <button onClick={()=>Decrement(-1)}>Decrement</button>
           <button onClick={()=>setCount(0)}>Reset</button>

    </div>
  );
}

export default App;
