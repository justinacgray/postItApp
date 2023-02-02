const mongoose = require('mongoose')
mongoose.set("strictQuery", false); //use this to stop deprecation warning

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Shalom! MongoDB is connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB




// const mongoose = require('mongoose');
// const dbName = 'dbName'

// mongoose.connect(`mongodb://localhost/${dbName}`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => console.log(`Established a connection to the database: ${dbName}`))
//     .catch(err => console.log(`Something went wrong when connecting to the database: ${dbName} --`, err));