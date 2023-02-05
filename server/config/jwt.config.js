const jwt = require('jsonwebtoken')

// middleware that allows users to be logged in to CRUD 
// we can use this middleware anywhere to make sure a user is logged in when performing any type of CRUD
module.exports = {
    authenticate(req, res, next) {
        jwt.verify(req.cookies.usertoken,
            process.env.JWT_SECRET,
            (err, payload) => {
                // if they're not verified/logged in
                if (err) {
                    console.log("ERROR WITH VERIFY!!!", err)
                    // unauthorized 
                    res.status(401).json({ verified: false })
                }
                else {
                    console.log("PAYLOAD Woo Hoo!", payload)
                    // creating a variable called "jwtpayload" and making it equal to our payload
                    req.jwtpayload = payload
                    next()
                }
            }
        )
    }
}
