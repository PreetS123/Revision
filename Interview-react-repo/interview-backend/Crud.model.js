const mongoose= require('mongoose');

const userSchema= new mongoose.Schema({
    name:{type:String,required:true},
    gender:{type:String,required:true},
    mob_no:{type:Number,required:false}
})


const userModel= mongoose.model('user',userSchema);


module.exports= userModel;