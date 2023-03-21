const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const cors = require('cors');
//this will allow or configure our server to accept and update cookies, helps us decode the cookie
const cookieParser = require('cookie-parser') 
const port = process.env.PORT || 7000
const connectDB = require('./config/mongoose.config')
const app = express();

connectDB()


// 
app.use(express.urlencoded({ extended: true })); //middleware parses incoming request from the body
app.use(express.json());// middleware -> this allows all requests in format of json
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
    );
app.use(express.static("public"));
app.use(cookieParser());



// routes for our models
require("./routes/user.routes")(app);
require("./routes/note.routes")(app);

app.listen( port, () => console.log(`Listening on port: ${port}`) );