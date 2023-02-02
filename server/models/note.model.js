const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true,"Title is required!"],
        minLength: [3,"Title requires minimum of 3 characters!"],
        unique: [true, "Title is already taken"],
    },
    text: {
        type: String,
        required: [true,"Text is required!"],
        minLength: [3,"Field requires minimum of 3 characters!"]
    },
    isUrgent: {
        type: Boolean,
        required: [true,"Is this urgent?"],
        minLength: [3,"Field requires minimum of 3 characters!"]
    },
    dueDate: {
        type: Date,
        required: [true,"Field is required!"],
        minLength: [3,"Field requires minimum of 3 characters!"]
    },
    categoryType: {
        type: String,
        enum: ['personal', 'work', 'urgent', 'other'],
		default: 'other'    
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    
}, {timestamps: true});

const Note = mongoose.model('modelName', NoteSchema);

module.exports = Note;

