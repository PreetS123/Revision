const express= require('express');
const authRouter= express.Router();
const authModel= require('../models/Auth.model');
const bcrypt= require('bcrypt');

authRouter.post('/signup',async(req,res)=>{
    const {username,mobno,password,confirm}= req.body;
    let flag=false;
    for(let i=0; i<password.length; i++){
        if(password[i]===confirm[i]){
                flag=true;
        }else{
            flag=false;

        }
    }
       try{
        bcrypt.hash(password, 8, async function(err, hash) {
            // Store hash in your password DB.
            if(err){
                return res.send('Something went wrong')
            }else{
                if(flag===true){
                const user= new authModel({username,mobno,password:hash,confirm:hash});
                await user.save();
                console.log(user);
                return res.send(user);
                }else{
                    res.send('PASSWORD AND CONFIRM PASSWORD ARE NOT SAME')
                }
            }
          
        });
       }catch(er){
        res.send('Err in execution of try block')
       }     
   
})


authRouter.post('/signin',async(req,res)=>{
    const {username,password}=req.body;
    const user= await authModel.findOne({username})
    try{
        if(!user){
            return res.send('Invalid user');
        }
        
        bcrypt.compare(password, hash, async function(err, result) {
            // result == true
            if(err){
                return res.send('Something went wrong')
            }
            if(result){
                const auth_user= await authModel.create({username,password:user.password});
                await auth_user.save();
                res.send(auth_user);
                console.log(auth_user)
            }
        });
    }catch(er){
        res.send('Err in execution of try block')
    }
})


module.exports=authRouter;