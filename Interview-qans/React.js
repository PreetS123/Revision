/*
  What is React.js?
  React.js is a javaScript frontend library used to build reusable component.
  React.js is a client-side javaScript library which helps to build user-interface in terms of components.
*/

/*
 What are important features of React.js?
  Important features of react.js are:
  1. It uses VDOM for performance optimization.
  2. It follows unidirectional data-flow.
  3. It supports server-side rendering.
  4. 
*/

/*
  What are advantages of React.js ?
  1. Easy to learn and use.
  2. Unidirectional data flow.
  3. Use of VDOM.
  4. Use of Reusable components.
*/

/*
  What are limitations of React.js ?
  1. It is not fully fledge website.
  2. For beginner it would be slightly difficult 
*/

/*
    UseEffect--> UseEffect is a react hook, used for performing operation
     whenever the component is mounted, unmounted and updated.
      It takes two parameters one is function and other is dependecy array.
     example---->
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

/*

UseRef---> It store the value and not loose the value when component is updated or re-render.
           Changing value of useRef is not trigered on DOM.
           If we want to persist the state between re-render of a component then we
            can use the useRef Hook.

*/
/*
    When would you use useRef?
    If we don't want to update DOM element but want to get a value we use useRef.
  */

/*
   Hooks--> Hooks are a way to manage state in react components.
  */

/*
 State Variable---> It is a variable whose value can be updated.
 */

/*
 What is useState in React.
 UseState---> UseState is a react hooks which is used to manage state variable in React.
 */

/*
  How to access DOM element in React?
  By using useRef.
 */

/*
  What is custom Hooks? or What is Costom React Hook?
    Custom Hooks are javaScript function which start with use keyword,
     with some logic inside it.
     It is being used for better code reusability and readability.

  */

/*
  Can we initialize a state with a function?
    Yes,
  */

/*
   Do two component using same hook share State?
     No,
  */

/*
     Explain a difference between useState and useRef ?
      useState is a hook which is used to update the state in functional component.

      useRef is a hook which provides a way to access to the DOM.
          It returns a mutable ref object so you can access the value using .current property.

     */

/*
     What is memoization in react?
      Their is some time when re-rendering of component creates performance 
      issue to resolve this problem  react provides memoization. 
      Memoization is basically optimization technique that allows a programs 
      to inhance its performance if used at right place.
     */

/*
     What is useMemo in React?
         The useMemo() hook is used to apply the memoization technique to
          the function that we passed as its argument.
     */

/*
     What are common use cases for the useMemo?
     useMemo is generally used for an expensive function call in any project.
     Toggling of dark and light mode theme.
     Or for implementing an expensive search functionality.
     */

/*
    What are difference between react.Memo()and useMemo()?
     React.memo is a higher-order component (or HOC for short) which accepts a react component
      and an optional function that uses props to conditionally update the component using memoization,
     whereas 
      useMemo is a react hook that will accept a function and a dependency array and
      then memoize the value returned from the function passed into it.
    */

/*
   When would you use useContext hook?
     When we need to write same logic at multiple place then we use useContext hooks for reducing multiple line
     of same code at many places.
   */

/*
    Can a custom React hook return JSX?
    If a custom hook returns javaScript XML file then it will become similar to any other functional react hooks.
    Custom hook will return data.
   */

/*
     Explain the difference between useMemo vs useEffect + useState usage in that code?
    */

/*
 */

/*
 */

/*
 */

/*
 */

/*
 */