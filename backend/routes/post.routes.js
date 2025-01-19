const express = require("express");
const { getPost, getPostById, createPost, updatePost, deletePost } = require("../controllers/post.controller");
const validatePostMiddleware = require("../middleware/validatepost.middleware");
const router = express.Router();

router.route("/")
    .get(getPost)
    .post(validatePostMiddleware, createPost);

router.route("/:id")
    .get(getPostById)
    .put(validatePostMiddleware, updatePost)
    .delete(deletePost);

module.exports = router;
