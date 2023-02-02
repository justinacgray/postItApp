const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const cors = require('cors');
const port = process.env.PORT || 7000
const connectDB = require('./config/mongoose.config')
const app = express();

connectDB()

app.use(express.json(),express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:3000"
}));


require("./routes/user.routes")(app);

app.listen( port, () => console.log(`Listening on port: ${port}`) );