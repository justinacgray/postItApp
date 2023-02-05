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
        // todo User.findOne({username: req.body.username})
        // todo add logic to sign in via email or username
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
                // Todo add logic to check for empty req.body
                else {
                    // email is found
                    // salted 10x and returns BOOLEAN t/f
                    // compared hashed password to user input
                    bcrypt.compare(req.body.password, userRecord.password)
                        .then((isPasswordValid) => {
                            if (isPasswordValid) {
                                console.log("password is valid", isPasswordValid)
                                res.cookie(
                                    // naming of the cookie- it's called "usertokent!"
                                    "usertoken",
                                    // signing the cookie
                                    // sign is going to take in payload which is going to be all the info (credentials) that we want to encrypt 
                                    jwt.sign(
                                        // this will be jumbled nonsense
                                        // this is the data that will be in the cookie
                                        // THIS IS THE PAYLOAD!!!!
                                        // we are setting "id" to the User's id (_id)
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

    getLoggedInUser: async (req,res) => {
        console.log("inside getlogged")
        // User.findOne({ _id : req.jwtpayload.id})
        // .then(user => res.json(user))
        // .catch(err => res.json(err))
        try {
            const loggedinUser = await User.findOne({_id : req.jwtpayload.id})
            console.log("LoggedInUser", loggedinUser)
            res.status(200).json(loggedinUser)
        }
        // if failure
        catch(err) {
            console.log("%%%%--ERROR hold-up--%%%%", err)
            res.status(400).json(err)
        }
    },
    findAllUsers: async (req, res) => {
        try {
            const getUsers = await User.find()
            res.status(200).json(getUsers)
        } 
        catch(err) {
            console.log("ERROR, something went wrong getting all users", err)
            res.status(400).json(err)
        }

    }


}

// WHEN YOU GET THIS ERROR CHECK THE TYPE OF REQUEST (GET, POST, PUT, DELETE, etc)
// CastError: Cast to ObjectId failed for value "login" (type string) at path "_id" for model "User" 