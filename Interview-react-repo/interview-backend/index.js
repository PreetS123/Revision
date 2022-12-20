const express= require('express');
const connection = require('./config');
const cors= require('cors');
// const userModel= require('./Crud.model');
const authRouter= require('./routes/Auth.routes');
const app= express();
app.use(express.json());
app.use(cors());


app.use('/auth',authRouter);

 
    

app.listen(8080,async()=>{
    try{
        await connection;
    }catch(er){
        console.log('chk config',er);
    }
    console.log('listening on port 8080')
})
