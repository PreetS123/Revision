/*
Q) What is linked List ?
Ans--> A Linked List consist nodes where each node contain data field and reference of next node.It is a linear data structure.
 Time complixity of Linked list is O(n) and space complixity = O(1)

Q). Advantages of Linked Lists?
Ans-->
    1) Insertion and deletion in linked lists are very efficient.
    2) Linked list can be expanded in constant time.
    3) For implementation of stacks and queues and for representation of trees and graphs.
    4) Linked lists are used for dynamic memory allocation which means effective memory utilization hence, no memory wastage.

Q) Example of Insert node at head-->

    const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtHead(head, data) {
    let newNode = new LinkedListNode(data)
    
    if(head == null){
        head = newNode
        return head
    }
    else{
        newNode.next = head
        head = newNode
        return head
    }
}

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
/*   
THERE IS TWO WAYS TO WRITE PROMISE  1.) .then().catch()      2.) async and await --> try(){}catch(){}
1). --------------->
  let passexam = true;
      let myProm = new Promise(function(resolve,reject){
        if(passexam){
            resolve("bike")
        }
        else{
            reject("paragon")
        }
      })

      //success

      myProm.then(function(response){
        console.log("response:",response)
      });

      //error
      myProm.catch(function(error){
        console.log("error:",error)
      })


      2).----------------->

      async function promiseFunction(){
      let passexam = true;
      let myProm = new Promise(function(resolve,reject){
        if(passexam){
            resolve("bike")
        }
        else{
            reject("paragon")
        }
      })

    //try and catch method ------->

    try{
  let res = await myProm;
  console.log("res:",res)
    }
    catch(error){
  console.log("error:",error)
    }
}

promiseFunction()











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






What is constructer function in javascript?
ans->  
  In JavaScript, a constructor function is used to create objects. 
For example, 
// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// create an object
const person = new Person();    

In the above example, function Person() is an object constructor 
function.
                          or

To create an object from a constructor function, we use the new keyword.
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


            

   









//////////////////////////////////////////////////Call Apply Bind//////////////////////////

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

/*

PROTOTYPE IN JAVASCRIPT----------->

/////////////////////////////////////////////PROTYPE in javascript//////////////
javascript is a prototype based language, so, whenever we create a function 
using javascript, Javascript engine adds a prototype property inside a
function, Prototype property is basically an object, where we can attach 
methods and properties in a prototype object, which enables all the other 
objects to inherit these methods and properties.

///////////////////////////////////////////////Example///////////////////////////////
let grandfather = {
        eyes:"blue",
        
}

let father= Object.create(grandfather)
father.eyes="Yellow"


console.log(father)
/////////////////////////////////////////////////////////////////////////////////////////

function Shoes(s){
        this.brand = "adidas",
        this.type = s,
        this.seller = "flipcart"
}

Shoes.prototype.sale = function () {
        console.log("20% off, Its My birthday");
}

Shoes.prototype.owner = "Nike";

let s1 = new Shoes("sneakers")
console.log("s1:",s1)

let s2 = new Shoes("loafers")
console.log("s2:",s2)

s2.sale();

///////////////////////////////////////Protype Chaining:-/////////////////

let grandfather = {
        eyes:"blue",
        
}

let father= Object.create(grandfather)
father.eyes="Yellow"


console.log(father)


// o/p--> son:yellow

var family = {
                father:"Krishna",
                myFather(){
                    console.log(this.father)
                }
            }
            
            var son = Object.create(family)
            
            son.myFather()




Q.) What is event Loop in javaScript??

event loop is a mechasnism of javaScript, which gives us illusion to bieng a multithreaded although it is a single threaded. 


console.log('Hi!');

setTimeout(() => {
    console.log('Execute immediately.');
}, 0);

console.log('Bye!');

*/




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


// ForEach():- 1.)ForEach method does not create new array based on the given array.
//2.) The ForEach method returns "undefined"
//3.) ForEach method does not return anything hence the method chaining is
//can not applied here




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
            //2.) We can set the position of the element using top, bottom, left,right
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
/*
SERVER SIDE RENDERING:- In a server-side rendering when a user makes a request
to a webpage, the server prepare an HTML page by fetching user-specific
data and sends it to the user's machine over the internet.

2). Source code is not visible to the user because its output 
is an HTML page. 
3). In this any server-side technology can be used and it does not 
depend on the client. 
 4). It runs on the webserver.
 5). It provides more security for data.
 6). PHP, Python, Java, Ruby are used.
 


CLEINT SIDE RENDERING:- 1).Client side rendering is the approach to render
content in the browser, and it become popular when we start USINGG javascript 
libraries. 
2). Source code is visible to the user.
3). It usually depends on the browser and its version.
4). It runs on the user’s computer.
5). There are many advantages linked with this like faster. 
response times, a more interactive application. 
6). It does not provide security for data.
7). HTML, CSS, and javascript are used.

*/



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
//inside the <head> element,and  used to specify charector set,
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

/*
//////////////////////////////////////////////////////////////////////////
Q). WHAT ARE SELECTORS??
        selectors are used to select the content that WE want to style. Selectors
 are the part of CSS rule set. CSS selectors select HTML elements 
 according to its id, class, type, attribute etc.
 There are five type of Selectors---->
//ANS-> 1.) SIMPLE SELECTORS
//a.) Element selector
//b.) Id Selectors
//c.) Class Selectors
//d.) Universal Selectors
//e.)Grouping Slectors

//2.) COMBINATORS SELECTORS:-->A combinator is something that explains the relationship between the selectors.
//a.) Descendant Selector(space)
//b.) Child Selector(>)
//c.) Adjacent Sibling Selector (+)
//d.) General Sibling Selectors(~)

//3.) Attribute Selectors  ->The [attribute] selector is used to select elements with a specified attribute.
 Below are the example of attribute selectors
/* <input type="text" name="" value="">
 <input type="number" name="" value="">
<input type="email" name="" value=""> */
{/* <style>
input[type="text"]{
        border:2px solid red;
}
</style> */}
/*
<head>
<style>
a[target] {
  background-color: yellow;
}
</style>
</head>
<body>

<h2>CSS [attribute] Selector</h2>
<p>The links with a target attribute gets a yellow background:</p>

<a href="https://www.w3schools.com">w3schools.com</a>
<a href="http://www.disney.com" target="_blank">disney.com</a>
<a href="http://www.wikipedia.org" target="_top">wikipedia.org</a>

</body>
///////////////////////////////////////////////////////////////////////////

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
} */


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





/*
/////////////////////////////////////////////////////////////////////
//WHAT ARE SPECIFICITY?

//ANS-->Specificity is an algorithm that calculates the weight that is applied to a 
given CSS declaration. The weight is determined by the number of selectors of each 
weight category in the selector matching the element

 SPECIFICITY follow RULE POINT SYSTEM
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
// How Virtual DOM helps React:---> In react, everything is treated as a component or
// class component. A component can contain a state. Each 
// time we change something in our JSX file  
//
//   react updates it on its Virtual DOM tree. 


//  Virtual DOM is a copy of real DOM and used by react for performing DOm operation
//    faster, React maintains two Virtual
//    DOM at each time, one contains the updated Virtual DOM and one which is just 
//    the pre-update version of this updated Virtual DOM. Now it compares the 
//    pre-update version with the updated Virtual DOM and figures out what exactly 
//    has changed in the DOM like which components have been changed. This process 
//    of comparing the current Virtual DOM tree with the previous one is known 
//    as ‘diffing’. Once React finds out what exactly has changed then it updated 
//    those objects only, on real DOM.
//     React uses something called 'batch updates' to 
//    update the real DOM. It just means that the changes to the real DOM are sent in
//     batches instead of sending any update for a single change in the state of a 
//     component. We have seen that the re-rendering of the UI is the most expensive 
//     part and React manages to do this most efficiently by ensuring that the Real 
//     DOM receives batch updates to re-render the UI. This entire process of 
//     transforming changes to the real DOM is called Reconciliation
// This significantly improves the performance and is the main reason why React and 
// its Virtual DOM are much loved by developers all around.



////////////////////////////////////////////////////////////////////////////

//Spread operator: The spread operator helps us to expand 
//an array where multiple arguments are needed, it also helps to expand the
//object expressions. In cases where we require all the elements of an
//iterable or object to achieve a task, we use a spread operator.


// Rest operator: The rest operator is converse to the spread operator.
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




///////////////////////////////////fetch() in javascript//////////////////////

//The fetch() method in javascript is used to request to the server and load 
//the infoemation on the webpages. The request can be of any APIs that return
//the data of the format JSON or XML. This method returns a promise.

//syntax:
//fetch("url")
//.then((response)=>response.json())
//.then((data)=>console.log(data))
//PARAMETER: This method accept two parametors as mentioned above and 
//described below:

//url: It is the url to which the request is to be made.
//Options: It is an array of properties. It is an optional paramenter.

//Return value:  It return a promise whether it is resolved or not. The return
//data can be of the format JSON or XML. It can be an array of objects or
//simple a single object.


///////////////////////////////////ARRAY CONCAT METHOD///////////////////////////////////////

/*
var arr1 = [1,2,3,4,5]
var arr2 = [9,8,7,6,]
var arr3 = arr1.concat(arr2)

arr3.sort()
console.log(arr3)
arr3.reverse()
*/

//////////////////////////////////////////////////////////////////////////
//Q.) What are possible ways to create Objects in javascript??
//ANS--> There are many ways to create Objects in javascript that's are-

/*
1.) Object Constructer:
The simplest way to create an empty object is using the Object constructer.
Currently this approach is not recommended.

var object = new Object();


2.) Object's create method;
The create method of Object, create a new object by passing the protype 
object as a parameter.

var object = Object.create(null);

3.) Object literal syntax;
The Object literal syntax is a comma-separeted set of name-value pairs
wrapped in curly braces.

var object = {
        name:"Saif",
        age:21
};


4.) Function constructer;
Create any function and apply the new operator to create object instances,

function Person(name){
        this.name = name;
        this.age = 21;
}
var object = new Person("Saif");
console.log(object)


5.) Function Constructor with protype;
This is similar to function constructor but it uses prototype for their 
properties and method.

function Person(){}
Person.protype.name = "Saif"
var object = new Person();


6.) ES6 class syntax;
ES6 introduction class feature to create the objects

class Person {
        constructor(name){
                this.name
        }
}
var object = new Person("saif")





/////////////////////////////////////////////////////////////////////////////
q.) why do we call javascript as dynamic language??
ans-> JavaScript is a dynamic language means data types of the variables 
can change during the runtime.
<body>
<script>
      var x=0;
      x++;
      x="Text";
      x=true;
</script>
</body>

Q.) How does JavaScript determine data type?
Ans-> JavaScript determine datatypes depending on the value assigned.


///////////////////////////////////////////////////////////////////////////

PROTOTYPE :- 
1.) With the help of Object.create

const masai_stu = {
        batch:"web_16",
        institute:"Masai_School",
        current_unit:6,
        course:"javascript"
}

let student1 = Object.create(masai_stu,{name:{value:"Saif"}})

console.log(student1)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
  
      Q). What are React Hooks/////////////////////////////////////////////////////////////////////////////////////////////////////

      --> Hooks are a way to manage state in react components.
       Using Hooks, we can extract the stateful logic from a component 
       so that it can be tested independently and reused.

       This makes it possible to share Hooks among many components.
    */
   /*
     State Variable---> State variable is a variable whose value can be updated.


Q). What is useState in React.
       UseState is a react hooks and it is used to create a state variable with an initial value.
       This variable are monitered by VDOM and whenever the value of the variable changes VDOM will
       re-render the component.

  
  
Q).  UseRef---> useRef is a react hook that accepts one argument as the initial
 value and returns a reference (aka ref). A reference is an object 
 having a special property current.We can access the value using .current
property.
In useRef, 1)The value of the reference is persisted (stays the same) 
           between component re-renderings;
           2)Updating a reference doesn't trigger a component 
           re-rendering.
////////////////////////////////code //////////////////////////////////
    import React, { useRef } from "react";
import "./App.css"

const App = () =>{
  const countRef = useRef(0);

  const Handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`)
  };
   console.log("I rendered!")
    return (
      <div className="App">
        <button onClick={Handle}>Click Me!</button>
      </div>
    )
}

export default App
///////////////////////////////////////////////////////////////////////
        
     

Q). When would you use useRef?
     We can use useRef, when we want to change our state but the value of state shouldn't get triggred on DOM.
    //  If we don't want to update DOM element but want to get a value we use useRef.
    

Q).How to access DOM element in React?
     By using useRef.
   
   
     Explain a difference between useState and useRef ?
     UseState--> useState is a react hook and it is used to create a state variable 
     with initial value. This variables are monitered by vertual DOM, and whenever
     the value of the variable change vDOM wil re-render the component. 
     
      UseRef---> useRef is a react hook that accepts one argument as the initial
 value and returns a reference (aka ref). A reference is an object 
 having a special property current.We can access the value using .current
property.
In useRef, 1)The value of the reference is persisted (stays the same) 
           between component re-renderings;
           2)Updating a reference doesn't trigger a component 
           re-rendering.
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
           fixed timeInterval.
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
    Context api allows us to share data across our components more easily.
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
     In the earlier version, the useHistory() hook accesses the React Router history object and
     navigates to the other routers using the push or replace methods.
     It helps to go to the specific URL, forward or backward pages.
     In the updated version, the React Router’s new navigation API provides a useNavigate() hook
     which is an imperative version to perform the navigation actions with better compatibility.


     What is useHistory hook??
     ans--> useHistory is a react hook,And It access the React Router history object and navigates to 
          the other routes using the push or replace method. It helps to go to the specific url,
          forward or backward pages.
     */
  /*
     What is class component?
   */

/*
     Q). What is Git(global information tracker) ?

     1. to create branch ---> git branch practice
     2. to switch newly created branch --> git checkout practice
     3. to create branch and switch directly---> git checkout -b practice1
     4. to merge branch in master--> git merge practice1


     Q). What is diff b/w Git and Github?

     ans-  Git: Git is a distributed version control system for tracking 
     changes in source code during software development. It is designed 
     for coordinating work among programmers, but it can be used to track 
     changes in any set of files. Its goals include speed, data integrity, 
     and support for distributed, non-linear workflows. 

     GitHub: GitHub is a web-based Git repository hosting service, which 
     offers all of the distributed revision control and source code 
     management (SCM) functionality of Git as well as adding its own 
     features. 

No.	Git                                                             |          GitHub
------------------------------------------------------------------------------------------------------------------------------------------------	                                                                |    
1.	Git is a software.	                                        |        GitHub is a service.
2.	Git is a command-line tool	                                |        GitHub is a graphical user interface
3.	Git is installed locally on the system	                        |        GitHub is hosted on the web
4.	Git is maintained by linux.	                                |        GitHub is maintained by Microsoft.
5.	Git is focused on version control and code sharing.	        |        GitHub is focused on centralized source code hosting.
6.	Git is a version control system to manage source code history.  |        GitHub is a hosting service for Git repositories.
7.	Git was first released in 2005.                                 |        GitHub was launched in 2008.



Q). What are Unit Testing? 
ans-->  Unit testing is the first level of testing done before integration testing. 
Unit testing is such a type of testing technique that is usually performed by 
developers. Although due to the reluctance of developers to test, quality 
assurance engineers also do unit testing. 

Objective of Unit Testing:-
----------------------------- 
The objective of Unit Testing is:

To isolate a section of code.
To verify the correctness of the code.
To test every function and procedure.
To fix bugs early in the development cycle and to save costs.
To help the developers to understand the code base and enable them to make changes quickly.
To help with code reuse.


Q). What is prop drilling??
ans--> Prop drilling is basically a situation when the same data is 
being sent at almost every level due to requirement in the final level.

Q). What are Props in react??

ans-->  Props stand for Properties.
     Props are basically an object passed as an
    arguments into React Components.it is read only and can not be modified.
    react allow us to pass information to component that is from parent 
    component to child component.
    
   
 /////////////////////////EXAMPLE-->1//////////////////////////////////////   
    import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

const myElement = <Car brand="Ford" />;

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(myElement);
/////////////////////////EXAMPLE-->2///////////////////////////////////////
import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

function Garage() {
  return (
    <>
	    <h1>Who lives in my garage?</h1>
	    <Car brand="Ford" />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);



Q) How to access DOM elements in React??
Ans--> In react we can access the DOM element using refs. refs
 refs provides a way to access DOM nodes or React elements created in the 
 render method.


 example ---> 
 
 import React from 'react'
  
class App extends React.Component {
  
    constructor(props) {
        super(props);
         
        this.myRef = React.createRef();
      }
       
    handleClick = () => {
  
          
        this.myRef.current.value = "you clicked on button";
    }
    
    render() {
      return (
        <div>
        <input ref = {this.myRef}/>
          <button 
            onClick = {this.handleClick}
          > click me </button>
        </div>
      );
    }
  }
  
  export default App;




  
   Q). What is redux??
Redux is an open-source JavaScript library for managing and centralizing application state.
It is most commonly used with libraries such as React or Angular for building user interfaces.






  Q) What is thunk??
  Ans-->  Plain redux doesn’t allow complex logic inside action functions,
   you can only perform simple synchronous updates by dispatching actions.

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

  Q) What is Super, constructer, render function in reactjs??

  
*/
