const Blog = require('../models/BlogModel')
const BlogContentModel = require('../models/BlogContentModel')

module.exports = {
    createBlog : async(req, res)=>{
        try{
            let {title, category, description, contentRef, keywords, author, readTime} = req.body;
            // let content = contentRef;
            const htmlContent = new BlogContentModel({content: contentRef});
            await htmlContent.save();
            contentRef = htmlContent._id
              const newBlog = new BlogContentModel({
                title,
                category,
                description,
                contentRef,
                keywords,
                author, 
                readTime
            })
  
            await newBlog.save();
            res.status(201).json({message: 'Blog created successfully'})

        }catch(error){
            console.log('Error Creating Blog', error);
            res.status(500).json({message: "Internal Server Error"})
        }
    },
    getBlog : async(req, res)=>{
        try{
            
            const blogs = await Blog.find();
            res.json(blogs);
        }
        catch(error){
            console.log('Error getting blog data')
            res.status(500).json({message:''})
        }
    },  
    getOneBlog : async(req, res)=>{
        try{
            const id = req.params['id']
            const blog = await Blog.findById(id);
            res.send(blog);
        }
        catch(error){
            console.log('Error getting blog data')
            res.status(500).json({message:'error getting blogs data'})
        }
    },
    updateBlog : async(req, res)=>{
        try{
            let {title, category, description, contentRef, keywords, author, readTime} = req.body;
            const id = req.params['id'];
            
            const updatedblog = await Blog.findByIdAndUpdate(id, {
                title, category, description, keywords, author, readTime
            })

            const htmlId = updatedblog.contentRef;
            const updatedHtml = await BlogContentModel.findByIdAndUpdate(htmlId, {contentRef})

            res.status(200).json({message: 'Blog updated successufully'})

        }catch(error){
            res.status(500).json({message:'error updating data'})
        }

    },
    deleteBlog : async(req, res)=>{
        try{
            const id = req.params['id'];
            const deletedblog = await Blog.findByIdAndDelete(id)
            const contentid = deletedblog.contentRef;
            const htmldelete = await BlogContentModel.findByIdAndDelete(contentid);
            console.log(contentid)
            res.status(200).json({deletedblog, htmldelete})
        }catch(error){
            res.status(500).json({message: 'Error deleting blog'})
        }

    }
}