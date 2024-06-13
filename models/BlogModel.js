const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {type: String, required:true},
    category: {type: String, required:true},
    description: {type: String, required:true},
    contentRef: {type:mongoose.Schema.Types.ObjectId,
        ref:'HTML',
        required:true
    },
    keywords: {type: [String], required: true},
    author: {type:String, required:true},
    readTime:{type: String, required: true}
},{timestamps:true})

const Blog = mongoose.model('Blog', blogSchema);
module.exports=Blog;