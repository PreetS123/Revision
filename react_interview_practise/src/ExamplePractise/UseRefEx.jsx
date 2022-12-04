import React, { useRef } from 'react';


export const UseRefEx=()=>{
    const ref= useRef(1);
    // console.log(ref);

    const handleChange=()=>{
        ref.current=ref.current+1;
        console.log(ref);
        alert(`you clicked on ${ref.current}`)
    }
    
    return(
        <div>
            
            <button onClick={handleChange}>ADD</button>
        </div>
    )
}