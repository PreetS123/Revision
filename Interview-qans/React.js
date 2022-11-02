/*
    UseEffect--> UseEffect is a react hook, used for performing operation
     whenever the component is mounted, unmounted and updated.
      
     Explain 
     1.UseEffect(()=>{
          console.log('mounted')
     })
     rendering of component will happen for every changes.
     It will render for every change in that components.

     2.UseEffect(()=>{
          console.log('mounted[]');
     },[])
     It will render only once when the component is mounted.

    3. UseEffect(()=>{
          console.log('mounted')
     },[value])
     It will render when the component is mounted and every time when the value is changed.

     4.UseEffect(()=>{
          console.log('mounted)
     },[value1,value2,value3,value4])
     It will render when the component is mounted and if any one of the dependency of the 
     array changes then the useEffect function will run.

*/
/*
Difference between useEffect and setInterval.

useEffect-->useEffect is a rect hook for performing operations whenevr a component gets mounted, 
           updated and unmounted. It basically takes two parameter that is function and a dependency array.

setInterval---> SetInterval is a callback function which repeats a given function inside it after every 
           fixed timespan.
           
*/