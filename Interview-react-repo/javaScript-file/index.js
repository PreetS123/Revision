

  let arr=[2,4,6,7,33,11,9,45,32]

  function SpreadFun(...arg){
         console.log(arg);
  }

//   SpreadFun(arr);


    let farr=[2,3,1,4,1,3];

    // let filtered=farr.filter(el=>{
    //     return el!==el;
    // })
    // console.log(filtered);

     let obj={};
     for(let i=0; i<farr.length; i++){
        if(obj[farr[i]]===undefined){
            obj[farr[i]]=1;
        }else{
            obj[farr[i]]++;
        }
     }

     console.log(Object.keys(obj));