/*
       What is React.js?
       React is an efficient, flexible, open-source front-end javaScript
       library created by FaceBook in 2011. It is a tool for building 
       complex and reusable user interfaces, especially for single-page
       applications. It follows the component-based approach.

       React.js is a javaScript frontend library used to build reusable component.
       React.js is a client-side javaScript library which helps to build user-interface in terms of components.
  */

/*
        What are important features of React.js?
         Important features of react.js are:
          1).It supports server-side rendering.
           2).It follows the component-based approach.
          3). It uses VDOM rather than real DOM for performance optimization.
          4). It follows unidirectional data-flow.
          5). React uses JSX, a combination of basic HTML and JavaScript. 
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
        1). The first thing is that React is not a fully-fledged framework.
            It is just a JavaScript library.
        2). The beginner programmer might face difficulties understanding React fully.
        3). The coding might become complex using JSX.
  */

/*
        //WHAT IS DOM ALSO EXPLAIN VIRTUAL DOM??
//ANS:     DOM-->
// DOM stands for ‘Document Object Model’. In simple terms,
//  it is a structured representation of the HTML elements that are present in a
//   webpage or web-app. DOM represents the entire UI of our application.
//    The DOM is represented as a tree data structure. It contains a node for
//     each UI element present in the web document. It is very useful as it allows
//      web developers to modify content through JavaScript, also it being in
//       structured format helps a lot as we can choose specific targets and
//       all the code becomes much easier to work with.



VIRTUAL DOM:- How Virtual DOM helps React:

    Virtual DOM is a copy of real DOM and used by react for performing DOM operation faster, 
      React maintains two Virtual DOM at each time, one contains the updated Virtual DOM 
      and one which is just the pre-update version of this updated Virtual DOM.
       Now it compares the pre-update version with the updated Virtual DOM and figures out 
       what exactly has changed in the DOM like which components have been changed. 
       This process of comparing the current Virtual DOM tree with the previous one is known
      as ‘diffing’. Once React finds out what exactly has changed then it updated
      those objects only, on real DOM.
       React uses something called 'batch updates' to update the real DOM.
       It just means that the changes to the real DOM are sent in
       batches instead of sending any update for a single change in the state of a
       component. We have seen that the re-rendering of the UI is the most expensive
       part and React manages to do this most efficiently by ensuring that the Real
       DOM receives batch updates to re-render the UI. This entire process of
       transforming changes to the real DOM is called Reconciliation
       This significantly improves the performance and is the main reason why React and
        its Virtual DOM are much loved by developers all around.
        */
/*
       Hooks--> Hooks are a way to manage state in react components.
       They allow us to use all React features.
       Using Hooks, we can extract the stateful logic from a component so it can be tested independently and reused. 
       This makes it possible to share Hooks among many components.
    */

/*
     State Variable---> State variable is a variable whose value can be updated.
    */

/*
      What is useState in React.
       UseState is a react hooks and it is used to create a state variable with an initial value.
       This variable are monitered by VDOM and whenever the value of the variable changes VDOM will
       re-render the component.
      
   */
/*
    What is component in Reat.js?
  */

/*

    UseRef---> useRef is a hook that store the value and 
               not loose the value when component is updated or re-render.
              Changing value of useRef is not trigered on DOM.
              We can access the value using .current property.
            
     */

/*
     When would you use useRef?
     We can use useRef, when we want to change our state but the value of state shouldn't get triggred on DOM.
    //  If we don't want to update DOM element but want to get a value we use useRef.
    */

/*
    How to access DOM element in React?
     By using useRef.
   */

/*
     Explain a difference between useState and useRef ?
      useState is a hook which is used to update the state in functional component.

      useRef is a hook which provides a way to access to the DOM.
          It returns a mutable ref object so you can access the value using .current property.

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
  What is custom Hooks? or What is Costom React Hook?
    Custom Hooks are javaScript function which start with use keyword,
     with some logic inside it.
     Custom Hooks maintain the concept of DRY (don't repeat yourself) in React App.
     Whenever we feel that we have a logic that is used in multiple functional component,
      we just create a separate custom hook for it and use it.
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
     Explain the difference between useMemo vs useEffect + useState usage in that code?
    */

/*
    What is Context Api in react.js?
    Context Api is a way to pass data from parent to child component(s),
    and consume data in whatever component we need in our application without using props,
    So React context allows us to share data across our components more easily.
    
    */

/*
   Why React Context? We have Redux!!
   Using Redux intraction with states from parent to child components is quite difficult and
   it also gives us a complex code.
   whereas undestanding of concept and code through the usage of Context is far-easier than Redux.
   
   */

/*
  What is useReducer?
   useReducer hook is generally used when we have complex state-building logic
   or when the next state value depends upon its previous value
   as well as when the components are needed to be optimized.
   The useReducer Hook is the better alternative to the useState hook.
  
   The useReducer hook takes three arguments
   including reducer, initial state, and the function to load the initial state lazily.

   Syntax:

   const [state, dispatch] = useReducer(reducer, initialArgs, init);
    */

/*
    What is useNavigate?
    The useNavigate() hook is introduced in the React Router v6 to replace the useHistory() hook.
     In it the React Router’s navigation API provides useNavigate() hook 
     which is an imperative version to perform the navigation actions with better compatibility. 


      In the earlier version, the useHistory() hook accesses the React Router history object and
     navigates to the other routers using the push or replace methods.
     It helps to go to the specific URL, forward or backward pages. 
     */

/*
     What is class component?
   */

/*
       What is props?
        React allows us to pass information to a Component 
        (from a parent component to a child component) using something called props.
        Props is basically an object which is available for all the React components.
        Props are read only and cannot be modified by the component to which it belongs. 
     */

/*
        What is prop drilling?
         Prop drilling is basically a situation when the same data is being sent
          at almost every level due to requirements in the final level. 
        */

/*
          What is life-cycle-of-react.js?
          Initialization: This is the stage where the component is constructed with the given Props and default state.
           This is done in the constructor of a Component Class.
           Mounting: Mounting is the stage of rendering the JSX returned by the render method itself.
           Updating: Updating is the stage when the state of a component is updated and the application is repainted.
          Unmounting: As the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the page.
          */

/*
          What is Components?
          A Component is one of the core building blocks of React. 
          In other words, we can say that every application you will
           develop in React will be made up of pieces called components.
           Components make the task of building UIs much easier. 
          */

      /*

      
   Q). What is redux??
Redux is an open-source JavaScript library for managing and centralizing application state.
It is most commonly used with libraries such as React or Angular for building user interfaces.






  Q) What is thunk??
  Ans-->
  Thunk is a middleware that extends the ability of redux and allow you 
  to write complex logic that interacts with the store. Thunk doesn’t 
  interfere with the action until it returns a function. Thunk allows us
   to dispatch actions manually, which gives us the power to incorporate 
   some logic or run some asynchronous code before dispatching an action.
  The function returned from action is called a thunk function which is 
  called with two arguments : 

1. dispatch: It is a method used to dispatch actions, that can be received
 by reducers. 
2. getState: It gives access to store inside the thunk function.

A thunk function may contain any arbitrary logic, sync, or async, and 
can call dispatch or getState at any time.

Q). What is the flow of Redux??
  Ans--> As we know Redux is used for managing and centralizing application
    state in ReactJs. All the actions are being declared in the actiontypes file
    and all the actions are being performed in action file, and the state is being
    maintained in Reducer file. We call the Reducer in Store and then we wrap up
    our main file with Store using Provider.
    And We use useSelector and useDispatcher hooks to access the state from the store.

  Q). What is store in Redux?
  Ans--> Store: It is an object which provides the state of the application. This object
  is accessible with help of the provider in overall project.

  Q). What is useSelecter and Dispatcher in Redux?
  Ans-->1) useSelector() is a set of hook and provides access to the Redux store state.
        2) useDispatch() is used to dispatch actions to the reducer. (edited)



Q) What is Redux toolkit ??
Ans--> Redux Toolkit is a set of tools that helps simplify Redux development.
     It includes utilities for creating and managing Redux stores, as well as 
    for writing Redux actions and reducers.
The Redux team recommends using Redux Toolkit anytime you need to use Redux.
  Q). What is arbitrary Logic ??
  Ans--> 





  Q). What is MVC ?
ANS--> MVC is an architectural pattern that separates an application into 
three main logical components Model, View, and Controller. It isolates the business
logic and presentation layer from each other. It was traditionally used for desktop
graphical user interfaces (GUIs). Nowadays, MVC is one of the most frequently used
industry-standard web development frameworks to create scalable and extensible projects.

Model- The Model component corresponds to all the data-related logic that the user works with.
 This can represent either the data that is being transferred between the View and Controller 
 components or any other business logic-related data. It can add or retrieve data from the database.
 It responds to the controller’s request because the controller can’t interact with the database by 
 itself. The model interacts with the database and gives the required data back to the controller.

View- The View component is used for all the UI logic of the application. It generates a user interface
 for the user. Views are created by the data which is collected by the model component but these data 
 aren’t taken directly but through the controller. It only interacts with the controller.

Controller- The controller is the component that enables the interconnection between the views and the 
model so it acts as an intermediary. The controller doesn’t have to worry about handling data logic, 
it just tells the model what to do. It process all the business logic and incoming requests, 
manipulate data using the Model component and interact with the View to render the final output.




  Q). What is difference b/w export Default and export in ReactJs??
  Ans-->
  Named Exports: Named exports are useful to export several values. 
                 During the import, it is mandatory to use the same 
                 name of the corresponding object. 
Default Exports: Default exports are useful to export only a single
              object, function, variable. During the import, we can
               use any name to import.


Q). What is diff b/w Functional Components vs Class Components
Ans-->  Functional Components                  	                                        
1) A functional component is just a plain JavaScript pure function 
  that accepts props as an argument and returns a React element(JSX).
2) There is no render method used in functional components.

       Class Components 
1)  A class component requires you to extend from React.Component 
   and create a render function which returns a React element.
2)	It must have the render() method returning JSX (which is
     syntactically similar to HTML)


Q) What id diff b/w Virtual Dom and Shallow Dom??
Virtual Dom--->
1) t revolves around solving performance issues.
2) It is a complete representation of an actual DOM.
3) It creates a copy of the whole DOM object.

Shallow Dom--->
1) It revolves around the concept of encapsulation.
2) It is not a complete representation of the entire DOM.
3) It creates small pieces of the DOM object having their
 own, isolated scope.



 Q). What Are Webpack and Babel?
 Ans-->
Webpack and Babel are tools for developers that optimize JavaScript applications.

Webpack is a module bundler we can use to minify multiple files in a JavaScript 
project and increase the overall efficiency. A module bundler takes in all the 
assets and comes up with a single output file. This artefact can be imported 
into our HTML, making it a more lightweight project.

As for Babel, it is a syntax converter and a transpiler. There may be times 
you want your code to be compatible with all browsers and environments, 
including the older ones. In such instances, a great option to try out is Babel.

Q) What is the default localhost server port in reactjs??
Ans--> When we create a new react app using the npx create-react-app command,
 the default port for the app is 3000. We can access the app from the 
 localhost:3000.

 Q). What is fragment in Reactjs??
Ans--> React Fragment is a feature in React that allows you to return multiple
 elements from a React component by allowing you to group a list of children 
 without adding extra nodes to the DOM.


 Q). What is react router in react??
 Ans--> React Router is a standard library for routing in React. It enables the
  navigation among views of various components in a React Application, allows 
  changing the browser URL, and keeps the UI in sync with the URL.

       */

/*
           What is constructor function.
           In JavaScript, a constructor function is used to create objects.
           To create an object from a constructor function, we use the new keyword.
           // constructor function
           function Person () {
             this.name = 'John',
             this.age = 23
            }

         // create an object
         const person = new Person();



           The constructor() method is a special method for creating and initializing objects created within a class.
           The constructor() method is called automatically when a class is initiated,
           and it has to have the exact name "constructor", in fact, if you do not have a constructor method,
           JavaScript will add an invisible and empty constructor method.

             eg:- class Car {
              constructor(brand) {  // Constructor
                this.carname = brand;
                }
              }
              mycar = new Car("Ford");
           */
