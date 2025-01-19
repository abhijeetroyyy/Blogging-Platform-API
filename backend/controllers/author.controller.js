const Author = require('../models/author.model');
const { readDB } = require('../db/db');

const addAuthor = async (req, res) => {
    const { name, email } = req.body;
    try {
        const newAuthor = new Author({ name, email });
        await newAuthor.save();
        res.status(201).json(newAuthor);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.status(200).json(authors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getPostsByAuthor = (req, res) => {
    const { name } = req.params;
    const data = readDB();
    const posts = data.posts.filter(post => post.author === name);
    res.status(200).json(posts);
};

module.exports = { addAuthor, getAllAuthors, getPostsByAuthor };
