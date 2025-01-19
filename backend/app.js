const express = require('express');
const bodyParser = require('body-parser');
const loggingMiddleware = require('./middleware/logging.middleware');
const errorHandlingMiddleware = require('./middleware/errorhandelling.middleare');
const postRoutes = require('./routes/post.routes');
const authorRoutes = require('./routes/author.routes');
const { connectDB } = require('./db/db');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json()); // Parse incoming JSON data
app.use(loggingMiddleware); // Log requests

// Routes
app.use('/posts', postRoutes); // Use routes for handling posts
app.use('/authors', authorRoutes); // Use routes for handling authors

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Blogging API!');
});

// Error Handling Middleware
app.use(errorHandlingMiddleware);

module.exports = app;
