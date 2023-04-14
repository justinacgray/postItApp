const Post = require('../models/postit.model')
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

const PostItController = {
    // Create
    createPost: async (req,res)=>{    
        newPostObject = new Post(req.body) //creating a new instance of Post
        console.log("REQ BODY ++++++++++>", req.body)
        // first step is grab decoded jwt (json webtoken) because we need to attach the userID to the Post instance. 
        // remember when our user logs in they're sending a cookie with this json webtoken with encrypted data
        // we need to decode and then attach that to our Post instance aka object
        // decode is a method of jsonwebtoken and we use the help of the cookie-parser to make it work
        // decode from out request from the client 
        // usertoken is what we name our token from our models
        // config option {complete:true}

        // ----We don't need to use this syntax and created a easier way to decode out cookie/payload in are jwt.middleware file
    
        // const decodedJWT = jwt.decode(req.cookies.usertoken, {
        //     complete: true
        // })
        // newPostObject.createdBy = decodedJWT.payload.id

        // ______________________________________
        newPostObject.createdBy = req.jwtpayload.id

        // using save method because it works better for manipulating instance object
        console.log("newPostObject -->", newPostObject)
        try {
            const newPost = await newPostObject.save()
            res.status(200).json(newPost)
            }
        catch(err) {
            console.log(" ///ERROR///", err)
            // console.error(err)
            // we set the response of 400 to display our error, which is reflection our promise 
            // A 400 means our client is talking to our server fine but the client isn't sending good data
            // This will help us display error message on frontend
            // 404 error means request isn't right aka doesn't exist
            // 200 means we are good to go
            res.status(400).json(err)
        }
    },

    //Read All
    getAllPosts: async (req,res) => {
        try {
            const allPosts = await Post.find()
            // populated function that references the "User" model and can attach any of the properties we mentioned in our User model
            .populate("createdBy", "username email createdAt")
            res.status(200).json(allPosts)
        }
        catch(err){
            console.log("ERROR in GETALLL --->", err)
            res.status(500).json({message:"There has been a getAll error",error:err})
        }
    },
    // todo add async/await
    // findAllPostsByUser
    findAllPostsByUser: (req, res) => {
        // using our payload from our middleware so we are not decoding the cookie everytime
        if(req.jwtpayload.username !== req.params.username) {
            // person not logged in, seeing who they are
            console.log("not logged in user")
            User.findOne({username : req.params.username})
            .then((userNotLoggedIn) => {
                Post.find({createdBy: userNotLoggedIn._id})
                .then((allPostsFromUser) => {
                    console.log("ALL PostS By User --->", allPostsFromUser)
                    res.json(allPostsFromUser)
                })
                .catch((err) => {
                    console.log("ERROR with GETALL by User", err)
                    res.status(400).json(err)
                })
            })
            .catch((err) => {
                console.log("ERROR- Just went wrong", err)
                res.status(400).json(err)
            })
        }
        else {
            console.log("current user")
            Post.find({createdBy: req.jwtpayload.id})
            .then((allPostsFromLoggedInUser) => {
                console.log("allPostsByLoggedInUSer", allPostsFromLoggedInUser)
                res.json(allPostsFromLoggedInUser)
            })
            .catch((err) => {
                console.log("ERROR can't getPosts from logged in user!!!", err)
                res.status(400).json(err)
            })
        }

    },
    // todo these routes work but any loggedin user can delete/update
    // frontend logic to make sure only loggedin user can delete/update Post
    //Read One
    getOnePost: async (req,res)=>{
        try {
            onePost = await Post.find({_id:req.jwtpayload.id})
            console.log("onePost", onePost)
            res.status(200).json(onePost)
        }
        catch(err) {
            res.status(400).json({message:"There has been a getOne error",error:err})
        }
    },
    //Update
    updatePost: async (req,res)=>{
        try {
            const updatePost = await Post.findOneAndUpdate({_id:req.jwtpayload.id},req.body,{new:true,runValidators:true})
            console.log("updatedPost", updatePost)
            res.status(200).json(updatePost) //passing data to update
        }
        catch(err) {
            res.status(400).json({message:"There has been an update error",error:err})
        }
    },
    //Delete
    deletePost: async (req,res)=>{
        try {
            const deletePost = await Post.findOneAndDelete(req.jwtpayload.id)
            console.log("deletePost", deletePost)
            res.status(200).json(deletePost) //pass in your deleted data to return
        }
        catch(err) {
            res.status(400).json({message:"There has been an update error",error:err})
        }
    }

}

module.exports = PostItController