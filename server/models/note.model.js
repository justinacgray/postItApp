const mongoose = require('mongoose');
// const moment = require('moment-timezone');
// const dateEastCoast = moment.tz('America/New_York').format('ha z');
// console.log("DATETIME", dateEastCoast)

const NoteSchema = new mongoose.Schema({
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
        min: new Date(),
        default: new Date()
    
    },
    categoryType: {
        type: String,
        enum: ['personal', 'work', 'other'],
		default: 'other'    
    }, 
    // how we do one-to-many in Mongoose
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" // points to the exact collection that we are to link up with
    },
    
}, {timestamps: true});

const Note = mongoose.model('Note', NoteSchema);

module.exports = Note;

