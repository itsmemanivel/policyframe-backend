"use strict"

const mongoose = require('mongoose');
import { ObjectID } from "mongodb";


ObjectID.prototype.valueOf = function() {
    return this.toString();
  };
  
//templates Schema

const TemplateSchema = mongoose.Schema({

  
   
    author: {
        type: String,
        required: true
    },
    title: {
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
    description:{
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true
    },
    createdtime: {
        type: String,
        required: true
    }
})



const Template = module.exports = mongoose.model('templates',TemplateSchema)
