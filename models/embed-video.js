"use strict"

const mongoose = require('mongoose');
import { ObjectID } from "mongodb";


ObjectID.prototype.valueOf = function() {
    return this.toString();
  };
  
//embedVideos Schema

const EmbedVideoSchema = mongoose.Schema({

  
  
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
    image:{
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



const EmbedVideo = module.exports = mongoose.model('embed-videos',EmbedVideoSchema)


export default  EmbedVideo;