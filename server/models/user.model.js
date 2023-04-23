const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// https://www.npmjs.com/package/mongoose-unique-validator can use {PATH} {VALUE} {TYPE} ="unique" or "required"
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true," {PATH} is {TYPE} !"],
        minLength: [5,"Field requires minimum of 5 characters!"],
        maxLength: [50, "Username must be no longer than 50 characters"],
        unique: true,
        trim: true

    },
    firstName: {
        type: String,
        required: [true,"First name is required!"],
        minLength: [2,"First name requires minimum of 2 characters!"],
        maxLength: [50, "First name must be no longer than 50 characters"],
        trim: true
    },
    lastName: {
        type: String,
        required: [true,"Last Name is required!"],
        minLength: [2,"Last name requires minimum of 2 characters!"],
        maxLength: [50, "Last name must be no longer than 50 characters"],
        trim: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, "Email address is required"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        trim: true,
        required: [true,"Password is required!"],
        minLength: [7,"Password requires minimum of 3 characters!"],
        maxLength: [25, "Password name must be no longer than 25 characters"],
        match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{7,25}$/, 'A password must contain 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character(@$!%*#?&)']
    },
}, {timestamps: true});

// to use unique validator (even though it's NOT a validator)
UserSchema.plugin(uniqueValidator, { message: '{VALUE} is already taken.' });

UserSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword)
    .set((value) => this._confirmPassword = value) 

UserSchema.pre("validate", function(next) {
    console.log('this password', this.password)
    console.log('confirm password', this.confirmPassword)
    if(this.password !== this.confirmPassword) {
        this.invalidate("confirmPassword", "Passwords don't match. Please try again")
    }

    next()
})

UserSchema.pre("save", function(next) {
    bcrypt.hash(this.password, 12)
    .then((hashedPassword) => {
        console.log("hashed password", hashedPassword)
        this.password = hashedPassword
        next()
    })
})

const User = mongoose.model("User", UserSchema);
module.exports = User;