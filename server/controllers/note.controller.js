const Note = require('../models/note.model')
const jwt = require('jsonwebtoken')

const NoteController = {
    // Create
    createNote:(req,res)=>{    
        newNoteObject = new Note(req.body) //creating a new instance of Note

        // first step is grab decoded jwt (json webtoken) because we need to attach the userID to the Note instance. 
        // remember when our user logs in they're sending a cookie with this json webtoken with encrypted data
        // we need to decode and then attach that to our Note instance aka object
        // decode is a method of jsonwebtoken and we use the help of the cookie-parser to make it work
        // decode from out request from the client 
        // usertoken is what we name our token from our models
        // config option {complete:true}
        const decodedJWT = jwt.decode(req.cookies.usertoken, {
            complete: true
        })

        newNoteObject.createdBy = decodedJWT.payload.id

        // using save method because it works better for manipulating instance object
        newNoteObject.save()
            .then((newNote) => {
                console.log("newNote", newNote)
                res.json(newNote)
            })
            .catch((err) => {
                console.log(" ///ERROR ///", err)
                // we set the response of 400 to display our error, which is reflection our promise 
                // A 400 means our client is talking to our server fine but the client isn't sending good data
                // This will help us display error message on frontend
                // 404 error means request isn't right aka doesn't exist
                // 200 means we are good to go
                res.status(400).json(err)
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

module.exports = NoteController