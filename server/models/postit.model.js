const mongoose = require('mongoose');
// const moment = require('moment-timezone');
// const dateEastCoast = moment.tz('America/New_York').format('ha z');
// console.log("DATETIME", dateEastCoast)

const PostItSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true,"Title is required!"],
        minLength: [3," {VALUE} doesn't have enough characters!"],
        unique: [true, "Title is already taken"],
    },
    text: {
        type: String,
        required: [true,"Text is required!"],
        minLength: [3,"Field requires minimum of 3 characters!"]
    },
    isUrgent: {
        type: Boolean,
        default: false
    },
    dueDate: {
        type: Date,
        default: new Date()
    },
    categoryType: {
        type: String,
        enum: ['other', 'work', 'personal'],
		default: 'other'    
    }, 
    // how we do one-to-many in Mongoose
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" // points to the exact collection that we are to link up with
    },
    
}, {timestamps: true});

const Post = mongoose.model('Post', PostItSchema);

module.exports = Post;

