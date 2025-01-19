const validatePostMiddleware = (req, res, next) => {
    const { title, content, author } = req.body;
    if (!title || !content || !author) {
        return res.status(400).json({ error: "Title, content, and author are required fields" });
    }
    next();
};

module.exports = validatePostMiddleware;