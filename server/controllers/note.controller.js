const Note = require('../models/modelFilename.model')

const ControllerName = {
    // Create
    create:(req,res)=>{    
        Note.create(req.body)
        .then(()=>{ //pass in created thing into .then args
            res.status(201).json({}) //pass in your created data to return
        })
        .catch((err)=>{
            res.status(400).json({message:"There has been a create error",error:err})
        })
    },
    //Read All
    getAll:(req,res)=>{
        Note.find({})
        .then(()=>{ //pass in found things into .then args
            res.json({}) //pass in your found data to return
        })
        .catch((err)=>{
            res.status(500).json({message:"There has been a getAll error",error:err})
        })
    },
    //Read One
    getOne:(req,res)=>{
        Note.find({_id:req.params.id})
        .then(()=>{ //pass in found thing into .then args
            res.json({}) //pass in your found data to return
        })
        .catch((err)=>{
            res.status(400).json({message:"There has been a getOne error",error:err})
        })
    },
    //Update
    update:(req,res)=>{
        Note.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
        .then(()=>{ //pass in updated thing into .then args
            res.json({}) //pass in your updated data to return
        })
        .catch((err)=>{
            res.status(400).json({message:"There has been an update error",error:err})
        })
    },
    //Delete
    delete:(req,res)=>{
        Note.findOneAndDelete(req.params.id)
        .then(()=>{ //pass in deleted thing into .then args
            res.json({deletedUser:user}) //pass in your deleted data to return
        })
        .catch((err)=>{
            res.status(400).json({message:"There has been a delete error",error:err})
        })
    }

}

module.exports = ControllerName