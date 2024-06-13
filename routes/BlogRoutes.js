const express = require('express');
const {createBlog, getBlog, getOneBlog} = require('../controllers/BlogController');
const blogRoutes = express.Router();

blogRoutes.post('/createblog', createBlog);
blogRoutes.get('/getblogs', getBlog);
blogRoutes.get('/getoneblogs/:id', getOneBlog);

module.exports = blogRoutes;