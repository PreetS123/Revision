//////////////////////  Higher order function

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

         // Prototype-> An original model on which something is pretended.

         // let obj={
         //    name:'gopi'
         // }
         // let obj1= Object.create(obj);
         // // obj1.name='rishi';
         // // obj1.roll=23
         // console.log(obj1,'obj1');

         // In js a prototype can also have a prototype hence creating a prototype chain.


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
