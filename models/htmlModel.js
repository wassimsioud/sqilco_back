const mongoose = require('mongoose');

const htmlSchema = new mongoose.Schema({
    content: {type: String, required:true},
})

const htmlModel = mongoose.model("HTML", htmlSchema)

module.exports = htmlModel;