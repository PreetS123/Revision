

let promise= createPromise('fail');

promise.then(function(res){
    console.log(res);
}).catch(function(err){
    console.log(err)
});


function createPromise(text){
    let pr=new Promise(function (res,rej){
    if(text==='fail'){
        let err= new Error('Bhgwan bacha le mujhe');
        // console.log(err);
         rej(err)
    }else{
        let msg='aj to party papa ki tarf se';
        // console.log(msg);
         res(msg);
    }
    });
    return pr;
}

