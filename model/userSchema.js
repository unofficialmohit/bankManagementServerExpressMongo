const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    accountAddress:{
        type:String,
        required:true    
    },
    firstName:{
        type:String,
        // required:true
    },
    lastName:{
        type:String,
        // required:true
    },
    email:{
        type:String,
        // required:true,
    },
    phone:{
        type:String,
        // required:true
    },
    address:{
        type:String,
    },
    city:{
        type:String,
    },
    state:{
        type:String,
    }
    ,
    country:{
        type:String,
    }

})
module.exports=mongoose.model('User',userSchema);