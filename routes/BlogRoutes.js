const express = require('express');
const {createBlog, getBlog, getOneBlog, deleteBlog, updateBlog} = require('../controllers/BlogController');
const blogRoutes = express.Router();

blogRoutes.post('/createblog', createBlog);
blogRoutes.get('/getblogs', getBlog);
blogRoutes.get('/getoneblogs/:id', getOneBlog);
blogRoutes.put('/updateblog/:id', updateBlog);
blogRoutes.delete('/deleteblog/:id', deleteBlog);

module.exports = blogRoutes;