const mongoose=require('mongoose');
const musicSchema=new mongoose.Schema({
    Title:{
        type:String,
    },
    Album:{
        type:String,
    },
    Genre:{
        type:String,
    },
    Artist:{
        type:String,
    },

})
module.exports=mongoose.model('music',musicSchema);
