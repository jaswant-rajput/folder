const mongoose=require('mongoose')
const schema= new mongoose.Schema   ({
    title:{
        type:String,
        required:true,
        trim:true
    },
    text:{
        type:String,
        required:true,
        trim:true
    }  
})
const model=mongoose.model('notes',schema)
module.exports=model