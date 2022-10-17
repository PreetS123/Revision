
//////////////////////////////////////////////////////////// ////object destructuring/////////////////////////////////////////////////////

// var obj ={
//     firstname:"mohammad",
//     lastname:"saif",
//     location:{state:"jharkhand",city:"ranchi"}
// }

// const {firstname,lastname,location={state,city}} = obj

// console.log(firstname,lastname,location)

// when a function takes another function as an argument and return function


/////////////////////////////////////////////////////////////HIGHER ORDER FUNCTION/////////////////////////////////////////////////
// Higher order function is the function that accept another function as an 
// argument.

// function  pant()
// {
//     console.log("hi saif");
// }

// function shirt()
// {
//     console.log("vaibhav");
// }

// function shirtpant(type,pant,shirt)
// {
//   if(type=="NetT")
//   {
//     pant()
//   }
//   else if(type=="tshirt")
//   {
//     shirt()
//   }
// }


// shirtpant("tshirt",pant,shirt)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function fruite(){
//     var bag = "apple";
//     console.log(bag)
// }

// function vegitable(){
//     var cart = "potato";
//     console.log(cart)
// }


// function shopingMall(priority,fruite,vegitable){

//     if(priority=="high"){
//    fruite()
//     }
//     else if(priority=="low"){
//         vegitable()
//     }

// }

// shopingMall("low",fruite,vegitable)


///////////////////////HOISTING//////////////////////////////////

// Hoisting is the default behaviour of javascript due to which all variables and function moved on the top of their scop, 
// irrespective of where they are declare. The scope will be both local or global

// x =5;
// console.log(x)
// var x;


// sum()//function calling 


// function sum(){////function declare
//     console.log("Hello Sum")
// }

/////////////////////////////////////////////Temporal Dead Zone///////////////


// The Temporal Dead Zone is a behavior in javascript that occures when declaring
// a variable with the let and const keyword, but not with var. In ECMAScript 6, 
// accessing a let and const variable before its declaration (within its scope)
// causes a ReferenceError. The time span when that happens, b/w the creation 
// of a variable's binding and its declaration, is called the temporal dead zone.

// function somemethod(){
//     console.log(counter1);//undefined
//     console.log(counter2);//ReferenceError
//     var counter1 = 1;
//     let counter2 = 2;
// }

///////////////////////////////////////////////////Promises in javascript/////////////////////////////////
// Promise is a type of object It is basically used to handle the asynchronous 
// behavior of javascript. It has three state that are 
// 1.) Resolve
// 2.) Reject
// 3.) Pending

// const promises = new Promise((res,rej)=>{
//     res(1)
//     rej(error)
// })

// console.log(promises)








// closue is a combination of function, basically it is an inner function that has access to the outer's function variable


///////////////////////////////////////////CLOSURES//////////////////////

// A closures is the combination of a function and the environment within which 
// that function was declared. ie, it is an inner function that has access to 
// the outer function's variables. The closure has three scopes chains
// 1.) Own scope where variables define within it's curly brakets.
// 2.) Outer function's variables
// 3.) Global variables


// function fruite(name){
//     function cart(message){
//         console.log( name+" "+message)
//     }
//  cart("is the king of fruite")
// }

// fruite("apple")



////////////////////////////////////////////////Scope in javascript///////////


// Scope is the accessibility of variables, functions and objects in some particular 
// area in your code during runtime. In other words, scope determines the visibility
// of variable and other resources in areas of your code.


////////////////////////////////////WEB STORAGE//////////////////////////////////

// Web storage is an API which provide a mechanism by which browser can store
// key/value locally in the user's browser. THe web browser provide two mechanism
// for storing data in client.
// 1.) LOCAL STORAGE:- It store data with no expiry data.
// 2.) SESSION STORAGE:- It store data for one session, after closing the 
// particular tab data will distroy. 



/////////////////////////////////diff b/w cookie and web storage//////////////


// 1.) YOU CAN ACCESS COOKIE BOTH CLIENT OR SERVER SIDE.
//     YOU CAN'T ACCESS WEB STORAGE IN SERVER SIDE

// 2.)MAXIMUN DATA SIZE OF COOKIE IS 4KB 
//    MAXIMUM SIZE OF WEB STORAGE IS 5MB.   


///////////////////////////////////////PROTOTYPE CHAIN////////////////////

// Prototype chaining is used to build new type of objects based on existing 
// ones. It is similar to inheritance in a class based language.

// The prototype on object instance is available through Object.getPrototypeOf(object)
// whereas prototype on constructer function is available on Object.prototype.





////////////////////////////////////////////////// Call Apply Bind  //////////////////////////

// Call : The call() method invokes a function with a given 'this' value and 
// arguments provided one by one.

// var employee1  = {firstname:"Mohammad",lastname:"saif"}
// var employee2 = {firstname:"Nihal",lastname:"Ahmad"}

// function invite(greeting1,greeting2){
//     console.log(greeting1 + " "+ this.firstname + " "+ this.lastname+ " "+ greeting2)
// }

// invite.call(employee1 , "Hello ", "How are you??");


// APPLY: Apply() method invokes a function with the given 'this' value and 
// allows you to paas in argument as an array.


// var employee1 = {firstname:"Mohammad",lastname:"Saif"}
// var employee2 = {firstname:"Nihal", lastname:"Ahmad"}

// function invite(greeting1,greeting2){
//     console.log(greeting1 + " "+ this.firstname + " "+ this.lastname + ", "+greeting2)

// }

// invite.apply(employee2,["Hellow","How are you?"])



// BIND(): Bind() method return a new function, allowing you to pass any 
// number of argument.

// var employee1 = {firstname:"Mohammad",lastname:"Saif"}
// var employee2 = {firstname:"Nihal", lastname:"Ahmad"}

// function invite(greeting1,greeting2){
//     console.log(greeting1 + " "+ this.firstname + " " + this.lastname + ", "+ greeting2)
// }

// var myinvite = invite.bind(employee1)


// myinvite("Hello","How are you")





//////////////////////////////////////////////REST API (Application Programming Interface)///////////////////////////////

// API:- An API is a set of definition and protocols for building and integrating
// application software.


// REST API :- Representational State Transfer (REST) is a software architectue
// that imposes condition on how an API should Work.

// FOR example, a REST API 'would use a GET' request to retrieve a record, 'a POST '
// request to create one, a PUT request to update a record, and 'a DELETE' request 
// to delete one. ALL HTTP method can be used in API calls.





/////////////////////////////////Diff b/w client-side script and Server side Script////////////////////////////////////////////

// Client-side Scripting :- 1.) It run on the user's computer.
// 2.) It useually depends on the browser and its version.
// 3.) Source code is visible to the user.
// 4.) There are many advantages linked with this like faster, response time,
// a more interactive application.
// 5.) It does not provide security for data.
// 6.) HTML CSS and javaScript are used.


// Server side Scripting:- 1.) It run on the webserver.
// 2.) In this any server-side technology can be used and it does not depend 
// on the client.
// 3.) Source code is not visible to the user because it's output is an HTML
// page.
// 4.) It provide more security for data.
// 5.) PHP Python, Java, Ruby are used.


///////////////////////////////////////////////MAP(), REDUCE(), FOREACH(), FILTER()///////////////////////////

//Map() :- It create a new array from calling a function 
// for every array element. It call a function onces for each element in 
//the array. It does not change the original array.


// DIFF B/W MAP() AND ForEach() method??

//Map():- 1.) The map() method create entirely new Array.
//2.) with the map() method chaining is possible because it return new array
// a/c to provided callback function.
//3.) It does not change original array.



// ForEach():- 
//1.)ForEach method does not create new array based on the given array.
//2.) The ForEach method returns "undefined".
//3.) ForEach method does not return anything hence the method chaining is
    //can not applied here.




//////////////////////////////////////////////////DIFF B/W INLINE AND BLOCK LEVEL ELEMENT/////////////////////////////////


//Inline Element:-  1.) Inline element occupy only sufficient width required.
//2.) Inline element does not start in a new line.
//3.) Inline element allow other inline element to sit behind.
//4.) Inline element don't have top and bottom margin.

//BLOCK LEVEL ELEMENT:- 1.) Block Element occupy the full width irrespective
//of their sufficiency.
//2.) Block element always start in a line.
//3.) Block element does not allow other element to sit behind.
//4.) Block element have top and bottom margin.



//////////////////////////////////////position property//////////////////////


//1.) relative:- 1.) It takes gap from it's normal position.
                // 2.) If we set it's top, left , right, bottom , other element
                // will not fill up the gap left by this element.

// .container{
//     border: 2px solid brown;

// }

// .box{
//     border:2px solid blue;
//     margin: 5px;
//     height: 100px;
//     width:100px;
//     display:inline-block;
// }

// .two{
//     position: relative;
//     top:10px;
//     left:50px;
// }
// <body>
// <div class="container">
//     <div class="one"></div>
//     <div class="two"></div>
//     <div class="three"></div>
//     <div class="four"></div>
//     </div>
// </body>



//2.) absolute:- 1.) It takes the gap from it's parent container.
             //  2.) If we set top , bottom , left, right then other element will fill up
             //   the gap left by this element. 

// .two{
//     position: absolute;
//     top:20px;
//     left:50px;
// }

//3.) Fixed:- 1.) An element with fixed position remain at the same position 
                 //    even we scroll the page.
            //2.) We can set the position of the element using top, bottom, left,right.
            //3.) If we use fixed position property then other element will
             //    fill the position which is left by this element. 
// .container{
//     border : 2px solid brown;
//     height:100000px;
// }

// .two{
//     position: fixed;
//     bottom:0;
//     right:0;
// }


//4.) sticky:- 1.) An element with STICKEY position remain at the same position even
// we scroll the page.
        //2.) We can set the position of the element using top, borttom, left, right
        //3.) If we use sticky position property then other element will not 
        // fill the space left by this element.

// .two{
//     position: sticky;
//     top:10px;
// }



/////////////////////////////server side rendring vs client side rendring//////////////////////////////

//SERVER SIDE RENDERING:- In a server-side rendering when a user makes a request
//to a webpage, the server prepare an HTML page by fetching user-specific
//data and sends it to the user's machine over the internet. The entire process
// of fetching data from the database, creating an HTML  page and sending it
//to client happens in milliseconds.


//CLEINT SIDE RENDERING:- Client side rendering is the approach to render
//content in the browser, and it is become popular when we start javascript 
//libraries. with client side rendering, the initial page reload in naturally
//a bit slow. However, after that, every subsequent page load is very fast.
//there is no need to reload the entire UI after every call to the server.
//The client-side framework manages to update UI with changed data by re-rendering
//only that particular DOM element 


////////////////////////////////////////////////////////////////////////
//WHAT ARE THE VARIOUS HTML TAGS??

//1.) <STRONG> -> marks the text as important.

//2.)<em> ->  <strong> and <em> tags represent that the span of text is of strong importance



///////////////////////////////////////////////////////////////////////////

//2.) Is it possible to change an inline element into a block level element??
//ans-> Yes, it is possible using the display property with it's value as block
//-level element. 




/////////////////////////////////////////////////////////////////////////
//3.) WHAT ARE METADATA?
//ans -> Metadata is the data(information) about data. <meta> tags always go
//inside the<head> element,and typically used to specify charector set,
// page discription, keyword, author of the document and viewpoint setting.
//Metadata describe unseen HTML elements that directly communicate and clarify
//website information for search engine.

{/* <head>
  <meta charset="UTF-8">
  <meta name="description" content="Free Web tutorials">
  <meta name="keywords" content="HTML,CSS,XML,JavaScript">
  <meta name="author" content="John Doe">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head> */}





////////////////////////////////////////////////////////////////////////////
//4.) WHAT ARE SEMANTIC ELEMENTS?
//ANS-> Semantic element are those which describe the particular meaning to the
//browser and the developer .Elements like <form>, <table>, <article>,<figure>
//are semantic elements.



//////////////////////////////////////////////////////////////////////////
//WHAT ARE SELECTORS?
//WHAT IS SPECIFICITY?
//WHAT ARE COMBINATOR?
//MEDIA QUERY?
//WHAT IS DOM?
//EVENT LOOP?
//SPREAD AND REST OPERATOR??
//UNLIMITED ELEMENT SUM ??


//////////////////////////////////////////////////////////////////////////
//WHAT ARE SELECTORS??
//ANS-> 1.) SIMPLE SELECTORS
//a.) Element selector
//b.) Id Selectors
//c.) Class Selectors
//d.) Universal Selectors
//e.)Grouping Slectors

//2.) COMBINATORS SELECTORS
//a.) Descendant Selector(space)
//b.) Child Selector(>)
//c.) Adjacent Sibling Selector (+)
//d.) General Sibling Selectors(~)

//3.) Attribute Selectors  -> Below are the example of attribute selectors
{/* <input type="text" name="" value="">
 <input type="number" name="" value="">
<input type="email" name="" value=""> */}
{/* <style>
input[type="text"]{
        border:2px solid red;
}
</style> */}

//4.) Pseudo-class selectors:-
//example of Pseudo selectore:
// :link, :hover, :visited, :target, :first-child, last-child, :nth-child(),
// :checked, :disabled, :enabled, :required  

{/* <body>
        <div class="box">
            <p>Paragraph one</p>
            <p>Paragraph two</p>
            <p>Paragraph three</p>
            <p>Paragraph four</p>
        </div>
</body>
<style>
.box p:first-child{
        color:red;
}

.box p:last-child{
        color:red;
}

.box p:nth-child(2){
        color:red;
} */}


//5.) Pseudo-element Selectors:-
//example of Pseudo-element selectors are--> ::after, ::first-letter, ::before, ::placeholder

{/* <body>
        <div>
                <p>
                        Hello how are you, Hello how are you, Hello how are you,
                        Hello how are you, Hello how are you, Hello how are you,
                        Hello how are you, Hello how are you, Hello how are you,
                        Hello how are you, Hello how are you, Hello how are you,
                </p>
        </div>

</body> */}
//<style>
{/* p::first-letter{
        fornt-size:90px;
        color:red;

} */}

{/* p::first-line{
        font-size: 50px;
        color:black;
} */}
//</style>






/////////////////////////////////////////////////////////////////////
//WHAT ARE SPECIFICITY?
//ANS--> SPECIFICITY RULE POINT SYSTEM
//1.) 10,000 POINT TO !Important
//2.) 1000 POINT TO Inline
//3.) 100 POINT to id
//4.) 10 point to class, attribute or pseudo-class
//5.) 1 for element selector & Pseudo-elements
//6.) 0 point universal selectors



///////////////////////////////////////////////////////////////////////////
//WHAT IS DOM ALSO EXPLAIN VIRTUAL DOM??
//ANS:     DOM-->
// DOM stands for ‘Document Object Model’. In simple terms,
//  it is a structured representation of the HTML elements that are present in a
//   webpage or web-app. DOM represents the entire UI of your application.
//    The DOM is represented as a tree data structure. It contains a node for
//     each UI element present in the web document. It is very useful as it allows
//      web developers to modify content through JavaScript, also it being in
//       structured format helps a lot as we can choose specific targets and 
//       all the code becomes much easier to work with.


//VIRTUAL DOM:-
// How Virtual DOM helps React: In react, everything is treated as a component be it 
// a functional component or class component. A component can contain a state. Each 
// time we change something in our JSX file or let’s put it in simple terms, whenever
//  the state of any component is changed react updates its Virtual DOM tree. Though
//   it may sound that it is ineffective but the cost is not much significant as 
//   updating the virtual DOM doesn’t take much time. 

//    React maintains two Virtual
//    DOM at each time, one contains the updated Virtual DOM and one which is just 
//    the pre-update version of this updated Virtual DOM. Now it compares the 
//    pre-update version with the updated Virtual DOM and figures out what exactly 
//    has changed in the DOM like which components have been changed. This process 
//    of comparing the current Virtual DOM tree with the previous one is known 
//    as ‘diffing’. Once React finds out what exactly has changed then it updated 
//    those objects only, on real DOM.
//     React uses something called batch updates to 
//    update the real DOM. It just means that the changes to the real DOM are sent in
//     batches instead of sending any update for a single change in the state of a 
//     component. We have seen that the re-rendering of the UI is the most expensive 
//     part and React manages to do this most efficiently by ensuring that the Real 
//     DOM receives batch updates to re-render the UI. This entire process of 
//     transforming changes to the real DOM is called Reconciliation
// This significantly improves the performance and is the main reason why React and 
// its Virtual DOM are much loved by developers all around.



/////////////////////////////// /////////////////////////////////////////////////

//Spread operator: The spread operator helps us expand an iterable such as 
//an array where multiple arguments are needed, it also helps to expand the
//object expressions. In cases where we require all the elements of an
//iterable or object to help us achieve a task, we use a spread operator.


// Rest operator: The rest parameter is converse to the spread operator.
// while spread operator expands elements of an iterable, rest operator
//compresses them. It collects several elements. In functions when we
//require to pass arguments but were not sure how many we have to pass,
//the rest parameter makes it easier. 


//Rest operator

// function add(a,b,c,...other){
//     console.log(other)
//     return(a+b+c)
// }

// const res = add(2,3,4,5,6,7,8)
// console.log(res)


//spread

// var names = ["Anna","Manna","Banna"]

// function getName(name1,name2,name3){
//     console.log(name1,name2,name3)
// }
// getName(...names)
// getName(names[0],names[1],names[2])


//Object ke sath -->Rest(pieces ko combine krna)

// var students={
//         name:"Anna",
//         age:"28",
//         hobbies:["cricket","singing"]
//     }
    
//     const {age,...rest} = students
//     console.log(rest)
    
//     //spread
    
//     var newStudents = {
//         ...students,
//         age:29
//     }
    
//     console.log(newStudents)



//////////////////////////////////////////////////////////////////////////
//Q.) WHAT ARE HOOKS?
//ANS -> hooks are in-built function in react used to manage state.

//Q2.) What is useState??
//ANS--> useState is a react hook, and it is used for create state variables
//with initial values, this variables are monitored by v-dom and whenever 
//the value of the variable changed, vdom will re-render the component.


//Q3.) WHAT IS UseEffect??
//ANS->  It is a react-hook, used for performing operations whenever the 
//component is in mounted, updated, unmounted


//Q4.) What are the lifecycle method??
//ANS-> mounted, updated,unmounted. are the lifecycle method.


//Q5.) explain useEffect(()=>{});
//ANS-> It will render for every change in that component.

//Q6.) explain useEffect(()=>{},[])
//ANS-> It will run only once when the component is mounted.

//Q7.) explain useEffect(()=>{},[values]);
//ANS-> It will run when component is mounted and everytime the value is changed.



//Q8.) explain useEffect(()=>{},[value1,value2,value3]);
//ANS-> It will run when component is mounted and if any of the dependency in 
//the array changes then the useEffect function will run.


//Q9.) return in useEffect function??
//ANS-> It will execute the return function only when the component is
//getting unmounted. 



//////////////////////////////////////////////////////////////////////////
//Q.) What is a prototype??
//ANS--> An original model on which something is patterned.

//Prototype and Inheritance??

// var obj = {
//         name:"bike"
// }

// var obj2 = Object.create(obj)
// console.log(obj2,"obj2")


///In js, a prototype can also have a prototye 
//hence creating a prototype chain.


//WHAT IS INHERITANCE ??
//ANS-> One object gets access to properties and methods of other object.
//js has prototypal Inheritance.

// var family = {
//         father:"krishna"
// }


// var son = Object.create(family)

// console.log(son)



// var family = {
//         father:"Krishna",
//         myFather(){
//             console.log(this.father)
//         }
//     }
    
//     var son = Object.create(family)
    
//     son.myFather()




