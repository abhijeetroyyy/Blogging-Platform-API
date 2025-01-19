const errorHandlingMiddleware = (err, req, res, next) => {
    console.error(err.message);
    res.status(err.status || 500).json({ error: err.message || "Internal server error" });
};

module.exports = errorHandlingMiddleware;