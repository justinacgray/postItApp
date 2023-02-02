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
    }

}