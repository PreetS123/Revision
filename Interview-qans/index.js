
/////////////////////////////////////// API ////////////////////////////////

// API-It stands for application programming interface. It is a set of defination and protocol that is helful in
// building and integrating web application.

// Rest API---> Representational State Transfer Application Programming Interface is helpful in setting up rules
// and regulation on how the api is going to be performed

// We gan perform GET , POST, PUT, DELETE on the API.



///////////////////////////////  Rest Operator and Spread Operator /////////////////////////////////////////////////

//Spread operator: The spread operator helps us expand an iterable such as
//an array where multiple arguments are needed, it also helps to expand the
//object expressions. In cases where we require all the elements of an
//iterable or object to help us achieve a task, we use a spread operator.

// Rest operator: The rest parameter is converse to the spread operator.
// while spread operator expands elements of an iterable, rest operator
//compresses them. It collects several elements. In functions when we
//require to pass arguments but were not sure how many we have to pass,
//the rest parameter makes it easier.
//  let ab=[9,8,7,6];
// function restop(a,b,...c){
//    console.log(c)
//    let xy=c.reduce((acc,cv)=>{
//         return acc+cv;
//    },0);
//    console.log(a+b+xy);
// }

//    restop(1,2,3,4,5,6,7,...ab)



///////////////////////////server side rendring vs client side rendring/////////////////////////////////////

/*
SERVER SIDE RENDERING:- In a server-side rendering when a user makes a request
to a webpage, the server prepare an HTML page by fetching user-specific
data and sends it to the user's machine over the internet. The entire process
 of fetching data from the database, creating an HTML  page and sending it
to client happens in milliseconds.
 2). Source code is not visible to the user because its output is an HTML page.
 3). In this any server-side technology can be used and it does not
      depend on the client.
 4). It runs on the webserver.
 5). It provides more security for data.
 6). PHP, Python, Java, Ruby are used.


CLEINT SIDE RENDERING:- 1).Client side rendering is the approach to render
content in the browser, and it become popular when we start using javascript
libraries.
2). Source code is visible to the user.
3). It usually depends on the browser and its version.
4). It runs on the user’s computer.
5). There are many advantages linked with this like faster.
response times, a more interactive application.
6). It does not provide security for data.
7). HTML, CSS, and javascript are used.
*/


////////////////////////////////Multithreaded ////////////////////////////

//    MultiThreading is a phenomenon of executing more that one thred at a particular time.
    //   where execution of threads can happen parallely.

    //////////////////////////// Single threaded ///////////////////
    // SingleThreaded is a phenomenon of javaScript where execution of code happens one after the other.


   //////////////////////////////// Event Loop//////////////////////////////////////////

//    Event Loop-> Event loop give us an illusion of javaScript being a multithreaded although it is single threaded.
    // When we declare multiple functions all functions which will take time goes into eventloop.
    // And the function which takes less time will be executed first although it is written in last of the programme.

//  An event loop is something that pulls stuff out of the queue and places it onto the function execution stack
//  whenever the function stack becomes empty.
//  Browser attaches all the web Api to global space/Object(window object ) and this gives them access to execution stack;
           

//////////////  Higher order function /////////////////////////////////////////////

//a function that takes another function as an argument is called as higher order function

//    function fruit(){
//     console.log('a')
//    }
//    function fruit1(){
//     console.log('b')
//    }

//    function fruits(abc,fruit,fruit1){
//        if(abc==='a'){
//             fruit();
//        }
//        else if(abc==='b'){
//         fruit1();
//        }
//        else{
//         console.log('none');
//        }
//    }

//     fruits('qw',fruit,fruit1);

////////////////////////////////////////////////////////////////////////////////////////

// Hoisting->   It is a default behaviour of js due to which all the variables and functions are moved to the top of the scope
///             irrespective of where they are declared.

//    x=2;
//    console.log(x);
//    var x;

//      happy();

//      function happy(){
//         console.log('my name is happy sing')
//      }

////////////////////////////////////Temporal dead zone/////////////////////////////////////////////////////////

//  Temporal dead zone is a js behaviour which occurs when we declare a variable with let and const
//  In ECMAScript6 we cannot access the variable declared with let and const before its declaration
//

// console.log(c1);//Reference Error
// console.log(c2);//undefined
// let c1=2;
// var c2=3

///////////////////////////////////////////Promises in JS //////////////////////////////////////////////////////

//   Promise in js are object that return a single output as per the condition resolved or pending.
//   It is used to handle asynchronous nature of js.
//   It has three state
//   1. pending
//   2. resolved
//   3. rejected

// const new_promise= new Promise((res,rej)=>{
//         if(res){
//             console.log('chappal')
//         }
//         else if(rej){
//             console.log('sure milnge chappal')
//         }
// })

// console.log(new_promise)


///////////////////////////////////  CLOSURE   /////////////////////////////////////////////////////////

//   Closure----> It makes it possible for a function to have a private varible .
//   JavaScript  closure is used to control what is and isn't  in scope in a particular function ,
//    along with which variables are shared between sibling function in the same containing scopes .

// A closure is a combination of  function and the  environment within which that function was declared i.e
// where inner function has access to the  variable of outer function.
// The closures have three scopes chain :
// 1. The outer function scope
// 2. The inner function scope.
// 3. The global variables.

// var abc= closureex=(z)=>{
//    let x=5;
//    return function closure1(){
//       let y=10;
//       return function closure2(){
//          return x+y+z
//       }
//    }
// }

// console.log(abc(7)()());

/////////////////////////////////////// Scopes in js ////////////////////////////////////////
//  Scopes are accessbility of a variable , function and object in some particular area in our code during runtime.

///////////////////////////////////////////////Web Storage//////////////////////////////////////////////
// Web Storage provides a storage area on the web. It is of two types
// 1. Local Storage->It stores data with no expiry Date.
// 2. Session Storage-> It stores data for one session. The data is lost when we close the tab or the browser.

/////////////////////////////Difference between cookies and web storage//////////////////////////////
// 1.  We can access cokkies both client and server side.
//     We can't access web storage in server side.

// 2.   Maximum data size of cokkies is 4kb.
//      Maximum data size of web-storage is 5 MB .

///////////////////// Prototype ////////////////////////////////////////////

// let obj={
//    name:'gopi'
// }
// let obj1= Object.create(obj);
// // obj1.name='rishi';
// // obj1.roll=23
// console.log(obj1,'obj1');

// In js a prototype can also have a prototype hence creating a prototype chain.



//          PROTOTYPE :-
// 1.) With the help of Object.create

// const masai_stu = {
//         batch:"web_16",
//         institute:"Masai_School",
//         current_unit:6,
//         course:"javascript"
// }

// let student1 = Object.create(masai_stu,{name:{value:"Saif"}})

// console.log(student1)

// /////////////////////////////////////////////Protype in javascript//////////////
// javascript is a prototype based language, so, whenever we create a function
// using javascript, Javascript engine adds a prototype property inside a
// function, Prototype property is basically an object, where we can attach
// methods and properties in a prototype object, which enables all the other
// objects to inherit these methods and properties.

// function Shoes(s){
//         this.brand = "adidas",
//         this.type = s,
//         this.seller = "flipcart"
// }

// Shoes.prototype.sale = function () {
//         console.log("20% off, Its My birthday");
// }

// Shoes.prototype.owner = "Nike";

// let s1 = new Shoes("sneakers")
// console.log("s1:",s1)

// let s2 = new Shoes("loafers")
// console.log("s2:",s2)

// s2.sale();

// ///////////////////////////////////////Protype Chaining:-/////////////////

// let grandfather = {
//         eyes:"blue"
// }

// let father= Object.create(grandfather)
// father.eyes="Yellow"

// let son = Object.create(father)
// console.log("son:",son.eyes)

// o/p--> son:yellow

///////////////////////////// Inheritance ///////////////////////////////////////

// Inheritance-> When any object get accessed to the propety of other object is called inheritance.

// let father={
//    name:'krishna'
// }
// let son= Object.create(father);
// console.log(son)

// let family={
//    name:'Krishna',
//    myfather(){
//       console.log(this.name);
//    }
// }

//  let son= Object.create(family);

//  son.myfather();

////////////////////////////// Call Apply Bind ////////////////////////////////////////

// Call ->
// It invokes a function with  given this value , provided arguments one by one.

//    let employee={
//       fname:'Preeti',
//       lname:'Sharma',

//    }

//   function invites(g1,g2){
//    console.log(g1+' '+this.fname+' '+this.lname+' '+g2)
//   }

//   invites.call(employee,'Hello','How are you ? ')

//Apply ---->
// It is similar to call but argument intake is different i.e It takes argument as an array.

//  let emp={
//    fname:'rajeev',
//    lname:'raj'
//  }
//  function invites(g1,g2){
//    console.log(g1,this.fname,this.lname,g2);
//  }

//  invites.apply(emp,['hello!','How are u ?']);

// Bind---->
// It returns a new function taking multiple arguments .

// let emp1={
//    fname:'ram',
//    lname:'singh'
// }

//  function invites(g1,g2){
//    console.log(this.fname,this.lname,g1,g2)
//  }

//  const emp=invites.bind(emp1);

//  emp('hello','are u okay')

//////////////////////////////Prototype Chaining//////////////////////////////////////////////////////

// Prototype chaining is used to build new type of objects based on existing object.
// It is similar to inheritance in class based language.

//the prototype of  an object is visible through Object.getPrototypeOf(obj);
// whereas prototype on constructor functio is available on Object.prototype()




///////////////////////////////////////MAP(), REDUCE(), FOREACH(), FILTER()///////////////////////////////////////////

// Map()--->Map method creates a new array
//         It call a new function for each item.
//         It doesn't modify the old array else it return a new array.
//         With map method chaning is possible as it return a new array a/c to the callback condition.

// ForEach()---> It doesn't return a new array .
//               With forEach method optional chaning is not possible as it doesn't return anything.
//                It return a undefined value.




//////////////////////////////////Diff b/w client-side script and Server side Script///////////////////////////////////

// Client Side Scripting--->  It generally run on user system.
//         The source code is visible to the user.
//         It doesn't provide data security.
//         It genarry use HTML, CSS , JavaScript.

// Server Side Scripting->  It run on web server.
//              The source code is not visible to the user.
//              It provide data security.
//              It generally uses Java, Ruby, Python,

////////////////////////// DIFF B/W INLINE AND BLOCK LEVEL ELEMENT ////////////////////////////////////

// Inline Element----> It occupy only that much space that is required.
//                    It allow other element to sit beside it.
//                    eg---> span is an inline element.

//  Block Elemnt-----> It occupy full width .
//                    It start with a new line.
//                    Block element have top nd bottom margin.

/////////////////////////position property//////////////////////////////////////////

// Relative----> We can set the reletive postion as per the main container div .
//It takes gap from it's normal position.

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

//  absolute ----> It takes gap from its parent component.
// The left right top bottom gap left by this element is filled by other component.

//3.) Fixed:- 1.) An element with fixed position remain at the same position
//    even we scroll the page.
//2.) We can set the position of the element using top, bottom, left,right.
//3.) If we use fixed position property then other element will
//    fill the position which is left by this element.

//4.) sticky:- 1.) An element with STICKY position remain at the same position even
// we scroll the page.
//2.) We can set the position of the element using top, borttom, left, right
//3.) If we use sticky position property then other element will not
// fill the space left by this element.









// let emp1={
//    fname:'Md',
//    lname:'Saif'
// }

// function callemp(g1,g2){
//    console.log(`${g1}! ${this.fname} ${this.lname} ${g2}`)
// }

//  let details= callemp.bind(emp1);
//  details('hello','how are u');

// function preeti(){
//    console.log('preeti')
// }
// function saif(){
//    console.log('saif')
// }

// function love(preeti,saif,x){

//    if(x===2){
//       preeti()
//    }
//    else if(x===3){
//       saif()
//    }
//    else
//    console.log('koi nhi jeeta')
// }

// love(preeti,saif,2);

//   function closureex(name){
//    let x=2;
//     function inner(message){
//       let y=4;
//       console.log(name,message)
//    //   return function outer(){
//    //       console.log(x+y)
//    //    }
//    }
//    inner('i want to live with u for rest of my life');
//   }

//    closureex('saif');
