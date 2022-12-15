const express= require('express');
const connection = require('./config');
const userModel= require('./Crud.model');

const app= express();
app.use(express.json());

 app.get('/',async(req,res)=>{
   try{
     const user= await userModel.find();
     res.send(user);
   }catch(er){
    res.send({message:er.message})
   }
 })

 app.post('/',async(req,res)=>{
    try{
      const user= await userModel.create(req.body);
      user.save();
      res.send(user);
    }catch(er){
     res.send({message:er.message})
    }
  })
    

app.listen(8080,async()=>{
    try{
        await connection;
    }catch(er){
        console.log('chk config',er);
    }
    console.log('listening on port 8080')
})
