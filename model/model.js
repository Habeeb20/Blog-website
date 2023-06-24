const mongoose = require("mongoose")

const blogschema = new mongoose.Schema ({
    title: {
        type: String,
        required: "please input your title for the post"
    },

    image: {
        type: String,
        required: "please input a url for the image"
    },

    body: {
        type: String,
        required: "please input a body"
    },

    created: {
        type:Date, default: Date.now
    }



})

module.exports= mongoose.model("Blog", blogschema)