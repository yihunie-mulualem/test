const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
    },
   lastName:{
        type:String,
    },
    Email:{
        type:String,
    },
    username:{
        type:"string",
    },
    password:{
        type:String,
    },

})
module.exports=mongoose.model('user',userSchema);
