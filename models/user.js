"use strict"

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
import { ObjectID } from "mongodb";


ObjectID.prototype.valueOf = function() {
    return this.toString();
  };
  
//User Schema

const UserSchema = mongoose.Schema({

    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    createdtime: {
        type: String,
        required: true
    }
})


const User = module.exports = mongoose.model('users',UserSchema)

