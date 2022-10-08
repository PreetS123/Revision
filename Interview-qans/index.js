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

         

