const mongoose=require('mongoose')

const bookingTemplate=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    numberofguests:{
        type:Number,
        required:true
    },
    bookingdate:{
        type:String,
        required:true
    
    },
    bookingtime:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model('booking',bookingTemplate)