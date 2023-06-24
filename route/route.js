const express = require('express');

const router = express.Router();

const { newBlog,createBlog,getBlogs, showBlog, editBlog, updateBlog,deleteBlog} = require("../controllers/controller")




router.get("/blogs", getBlogs);
router.get("/blogs/new", newBlog)
router.post("/blogs", createBlog)
router.get("/blogs/:id", showBlog)
router.get("/blogs/:id/edit", editBlog)
router.put("/blogs/:id", updateBlog)
router.delete("/blogs/:id", deleteBlog)


module.exports = router;