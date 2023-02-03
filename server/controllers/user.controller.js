const User = require('../models/user.model')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

module.exports = {

    register: (req, res) => {
        // not using create, ut using save function instead to manipulate the req.body
        // create a new instance of a User
        const user = new User(req.body)
        // info is already in the instance of THIS object, no need anything in in
        // save is an instance method, doesn't require anything passed in
        // create is static and takes the object as the parameter
        user.save()
            // here is our promise
            .then((newUser) => {
                console.log("newUSer", newUser)
                console.log("Successfully Registered")
                res.json({
                    successManager: "Thank you for registering",
                    user: newUser
                })
            })
            .catch((err) => {
                console.log("UNsuccessful")
                console.error(err)
                res.status(500).json(err)
            })
    },
    login: (req, res) => {
        User.findOne({ email: req.body.email })
            // promise
            // if success
            .then((userRecord) => {
                // check if this returned obj is null
                // email does not exist
                console.log("userRECORD ===>", userRecord)
                if (userRecord === null) {
                    // email not found
                    res.status(400).json({ message: "Invalid!!!!" })
                }
                else {
                    // email is found
                    // salted 10x and returns BOOLEAN t/f
                    // compared hashed password to user input
                    bcrypt.compare(req.body.password, userRecord.password)
                        .then((isPasswordValid) => {
                            if (isPasswordValid) {
                                console.log("password is valid", isPasswordValid)
                                res.cookie(
                                    // naming of the cookie
                                    "usertoken",
                                    // signing the cookie
                                    // sign is going to take in payload which is going to be all the info (credentials) that we want to encrypt 
                                    jwt.sign(
                                        // this will be jumbled nonsense
                                        // this is the data that will be in the cookie
                                        {
                                            id: userRecord._id,
                                            email: userRecord.email,
                                            username: userRecord.username
                                        },
                                        // we need a key to sign and hash cookie's data
                                        // our payload need a secret_key. We will use a .env file to store such things privately 
                                        // they will not be added to public code
                                        process.env.JWT_SECRET
                                    ),
                                    // configuration settings for our cookie
                                    // make sure these cookies are "HttpOnly". This means that the cookies are essentially invisible to client-side JS and only be read server-side
                                    {
                                        httpOnly: true,
                                        expires: new Date(Date.now() + 9000000) //can change the time if desired
                                    }
                                ).json({ //data we are sending to the client
                                    message: "SUCCESS! Woo hoo!",
                                    userLogged: userRecord.username,
                                    userId: userRecord._id
                                })  
                            }
                            // password is NOT valid!!!
                            else {
                                res.status(400).json({
                                    message: "Login and/or Email Invalid"
                                })
                            }
                    })
                    .catch((err) => {
                        message: "***Invalid Attempt***"
                    })
            }
        })
        // if failure
        .catch((err) => {
            console.log("ERROR- Something else in backend went wrong", err)
            console.error(err)
            res.status(400).json({message: "Invalid Attempt!"})
        })
    },

    logout: (req, res) => {
        console.log("logging out")
        res.clearCookie('usertoken')
        res.json({message: "You have successfully logged out! "})
    },

    getOneUser: (req,res) => {
        User.findOne({_id : req.params.id})
        // if successful 
        .then((oneUser) => {
            console.log("oneUser ===>", oneUser)
            res.json(oneUser)
        })
        // if failure
        .catch((err) => {
            console.log("%%%%--ERR--%%%%", err)
            res.status(400).json(err)
        })
    }

}

// WHEN YOU GET THIS ERROR CHECK THE TYPE OF REQUEST (GET, POST, PUT, DELETE, etc)
// CastError: Cast to ObjectId failed for value "login" (type string) at path "_id" for model "User" 