const note=require('../models/notesmodel')

exports.createNote=async(req,res)=>{
    try{
        const newNote=await note.create({
            title:req.body.title,
            text: req.body.text
        })
        // const newNote = await note.create(req.body)
        console.log(req.body)
        res.json({
            success:true,
            note:newNote
        })
    }catch(err){
        res.json({
            success:false,
            err
        })
    }
}

exports.getNotes=async(req,res)=>{
    try{
        const notes=await note.find()
        res.json({
            success:true,
            notes
        })
    }catch(err){
        res.json({
            success:false,
            err
        })
    }
}

exports.getNoteById=async(req,res)=>{
    try{
        const notes=await note.findById(req.params.id)
        res.json({
            success:true,
            notes
        })
    }catch(err){
        res.json({
            success:false,
            err
        })
    }
}

exports.getNotesByQuery=async(req,res)=>{
    try{
        const notes=await note.find(req.query)
        res.json({
            success:true,
            notes
        })
    }catch(err){
        res.json({
            success:false,
            err
        })
    }
}

exports.updateByID=async(req,res)=>{
    try{
        const notes=await note.findByIdAndUpdate(req.body.id,{$set:req.body.update},{new :true})
        // const notes=await note.findOneAndUpdate({title : req.body.title},{$set:req.body.update},{new :true})
        res.json({
            success:true,
            notes
        })
        
    }catch(err){
        res.json({
            success:false,
            err
        })
    }
}

exports.updateManyByTitle=async(req,res)=>{
    try{
        const notes=await note.updateMany({title:req.body.title},{$set:req.body.update},{new :true})
        // const notes=await note.findOneAndUpdate({title : req.body.title},{$set:req.body.update},{new :true})
        res.json({
            success:true,
            notes
        })
        
    }catch(err){
        res.json({
            success:false,
            err
        })
    }
}


exports.deleteById=async(req,res)=>{
    try{
        const notes=await note.findByIdAndDelete(req.params.id)
        // const notes=await note.findOneAndUpdate({title : req.body.title},{$set:req.body.update},{new :true})
        res.json({
            success:true,
            notes
        })
        
    }catch(err){
        res.json({
            success:false,
            err
        })
    }
}



exports.deleteByTitle=async(req,res)=>{
    try{
        const notes=await note.findOneAndDelete({title:req.query.title})
        // const notes=await note.findOneAndUpdate({title : req.body.title},{$set:req.body.update},{new :true})
        res.json({
            success:true,
            notes
        })
        
    }catch(err){
        res.json({
            success:false,
            err
        })
    }
}

exports.deleteMany=async(req,res)=>{
    try{
        const notes=await note.deleteMany({title:req.query.title})
        // const notes=await note.findOneAndUpdate({title : req.body.title},{$set:req.body.update},{new :true})
        res.json({
            success:true,
            notes
        })
        
    }catch(err){
        res.json({
            success:false,
            err
        })
    }
}

