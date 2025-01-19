const { readDB, writeDB } = require("../db/db");
const Post = require("../models/post.models");

const getPost = (req, res) => {
    const data = readDB();
    res.status(200).json(data.posts);
};

const getPostById = (req, res) => {
    const data = readDB();
    const post = data.posts.find((p) => p.id === parseInt(req.params.id));
    if (!post) {
        res.status(404).json({ message: "Post not found" });
        return;
    }
    res.status(200).json(post);
};

const createPost = (req, res) => {
    const data = readDB();
    const newPost = new Post(
        data.posts.length + 1,
        req.body.title,
        req.body.content,
        req.body.author
    );
    data.posts.push(newPost);
    writeDB(data);
    res.status(201).json(newPost);
};

const updatePost = (req, res) => {
    const data = readDB();
    const postIndex = data.posts.findIndex((p) => p.id === parseInt(req.params.id));
    if (postIndex === -1) {
        res.status(404).json({ message: "Post not found" });
        return;
    }
    data.posts[postIndex] = { ...data.posts[postIndex], ...req.body };
    writeDB(data);
    res.status(200).json(data.posts[postIndex]);
};

const deletePost = (req, res) => {
    const data = readDB();
    const postIndex = data.posts.findIndex((p) => p.id === parseInt(req.params.id));
    if (postIndex === -1) {
        res.status(404).json({ message: "Post not found" });
        return;
    }
    data.posts.splice(postIndex, 1);
    writeDB(data);
    res.status(200).json({ message: "Post Deleted" });
};

module.exports = { getPost, getPostById, createPost, updatePost, deletePost };
