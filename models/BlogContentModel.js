const mongoose = require('mongoose');

const htmlSchema = new mongoose.Schema({
    content: {type: String, required:true},
})

const BlogContentModel = mongoose.model("HTML", htmlSchema)

module.exports = BlogContentModel;