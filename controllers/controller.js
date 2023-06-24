const Blog = require("../model/model");
const bodyParser = require("body-parser");
const asyncHandler = require("express-async-handler")

const getBlogs =  ( async (req, res) => {
    const blog = await Blog.find();

    try {
       
        res.render("index", {blog: blog})
    } 
    catch (err) {
        console.log(err)
        
    };
});



const newBlog = (async ( req, res) => {
    try {
        res.render("new")
    } catch (error) {
        console.log(err)
        
    }

});


const createBlog = ( async( req, res) => {
   

    try {
        const blog = await Blog.create();
        res.redirect("/blogs");
        
        
    } catch (err) {
        res.render("new")
        console.log(err)
        
    }

    

});

const showBlog = (async( req,res) => {
    
   
    
    try {
        let id = req.params.id;
        const blog = await Blog.findById(id);
        res.render("show", { blog:blog})
        
    } catch (err) {
        res.redirect("/blogs")
        console.log(err);
        
    }
    
});

const editBlog = ( async( req, res) => {
    const id = req.params.id;
    try {
       const blog= await Blog.findById(id);
       res.render("edit", {blog: blog})
        
    } catch (err) {
        res.redirect('/blogs')
        
    }
  
    
});



const updateBlog = ( async( req, res) => {
    const id = req.params.id;
    const blog = req.body.blog;
    try {
        const blog = await Blog.findByIdAndUpdate(id, blog )
        res.redirect("/blogs/" + id )
        
    } catch (error) {
        res.redirect('/blogs');
        console.log(error)
        
    }
  
    
    
});

const deleteBlog = ( async( req, res) => {
    const id = req.params.id;

    try {
        const blog = await Blog.findByIdAndDelete(id);
        res.redirect("/blogs")
    } catch (error) {
        res.redirect("/blogs")
        console.log(error)
        
    }


    
})







// app.post("/blog", (req, res) => {
//     Blog.create(req.body.blog);
//         if(err){
//             res.redirect("new")
//         } else {
//             res.render("blog")
//         }

//     })







module.exports = { getBlogs, newBlog, createBlog, showBlog,editBlog, updateBlog, deleteBlog}