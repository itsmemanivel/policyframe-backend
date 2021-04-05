"use strict"

const mongoose = require('mongoose');
import { ObjectID } from "mongodb";


ObjectID.prototype.valueOf = function() {
    return this.toString();
  };
  
//Testimonals Schema

const TestimonalSchema = mongoose.Schema({

  
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    createdtime: {
        type: String,
        required: true
    }
})



const Testimonal = module.exports = mongoose.model('testimonals',TestimonalSchema)


export default  Testimonal;