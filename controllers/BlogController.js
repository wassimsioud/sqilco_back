const Blog = require('../models/BlogModel')
const HTML = require('../models/htmlModel')

module.exports = {
    createBlog : async(req, res)=>{
        try{
            let {title, category, description, content, keywords, Author} = req.body;
            const htmlContent = new HTML({content});
            await htmlContent.save();
            content = htmlContent._id
              const newBlog = new Blog({
                title,
                category,
                description,
                content,
                keywords,
                Author
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
            res.status(500).json({message:''})
        }
    }
}