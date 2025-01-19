const express = require('express');
const { addAuthor, getAllAuthors, getPostsByAuthor } = require('../controllers/author.controller');
const router = express.Router();

router.post('/', addAuthor);
router.get('/', getAllAuthors);
router.get('/:name/posts', getPostsByAuthor);

module.exports = router;
