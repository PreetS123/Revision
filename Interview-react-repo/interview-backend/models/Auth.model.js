const mongoose= require('mongoose');


const authSchema= new mongoose.Schema({
    username:{type:String,required:true},
    mobno:{type:String,required:false},
    password:{type:String,required:true},
    confirm:{type:String,required:false}
})

const authModel=mongoose.model('authi',authSchema);


module.exports=authModel;