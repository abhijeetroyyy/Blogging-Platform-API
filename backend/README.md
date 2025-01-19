# Blogging Platform API

This is a simple Blogging Platform API built with Node.js, Express, and MongoDB.

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/abhijeetroyyy/Blogging-Platform-API.git
    ```
2. Navigate to the project directory:
    ```sh
    cd Blogging-Platform-API/backend
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Set up environment variables:
    Create a `.env` file in the root directory and add your MongoDB URI:
    ```env
    MONGO_URI=your_mongodb_uri
    ```

### Running the Server

1. Start the server:
    ```sh
    npm start
    ```
2. The server will be running on `http://localhost:4000`.

## API Documentation

### Routes

#### Get All Posts

- **URL:** `/posts`
- **Method:** `GET`
- **Description:** Retrieve all posts.
- **Response:**
    ```json
    [
        {
            "id": 1,
            "title": "Post Title",
            "content": "Post Content",
            "author": "Author Name"
        },
        // ...other posts
    ]
    ```

#### Get Post by ID

- **URL:** `/posts/:id`
- **Method:** `GET`
- **Description:** Retrieve a post by its ID.
- **Response:**
    ```json
    {
        "id": 1,
        "title": "Post Title",
        "content": "Post Content",
        "author": "Author Name"
    }
    ```

#### Create a New Post

- **URL:** `/posts`
- **Method:** `POST`
- **Description:** Create a new post.
- **Request Body:**
    ```json
    {
        "title": "Post Title",
        "content": "Post Content",
        "author": "Author Name"
    }
    ```
- **Response:**
    ```json
    {
        "id": 1,
        "title": "Post Title",
        "content": "Post Content",
        "author": "Author Name"
    }
    ```

#### Update a Post

- **URL:** `/posts/:id`
- **Method:** `PUT`
- **Description:** Update an existing post.
- **Request Body:**
    ```json
    {
        "title": "Updated Title",
        "content": "Updated Content",
        "author": "Updated Author"
    }
    ```
- **Response:**
    ```json
    {
        "id": 1,
        "title": "Updated Title",
        "content": "Updated Content",
        "author": "Updated Author"
    }
    ```

#### Delete a Post

- **URL:** `/posts/:id`
- **Method:** `DELETE`
- **Description:** Delete a post by its ID.
- **Response:**
    ```json
    {
        "message": "Post Deleted"
    }
    ```

#### Add a New Author

- **URL:** `/authors`
- **Method:** `POST`
- **Description:** Add a new author.
- **Request Body:**
    ```json
    {
        "name": "Author Name",
        "email": "author@example.com"
    }
    ```
- **Response:**
    ```json
    {
        "name": "Author Name",
        "email": "author@example.com",
        "_id": "author_id"
    }
    ```

#### Get All Authors

- **URL:** `/authors`
- **Method:** `GET`
- **Description:** Retrieve all authors.
- **Response:**
    ```json
    [
        {
            "name": "Author Name",
            "email": "author@example.com",
            "_id": "author_id"
        },
        // ...other authors
    ]
    ```

#### Get Posts by Author

- **URL:** `/authors/:name/posts`
- **Method:** `GET`
- **Description:** Retrieve all posts written by a specific author.
- **Response:**
    ```json
    [
        {
            "id": 1,
            "title": "Post Title",
            "content": "Post Content",
            "author": "Author Name"
        },
        // ...other posts by the author
    ]
    ```

## Middleware

### Logging Middleware

Logs the request method and URL along with the current timestamp.

### Validation Middleware

Validates the request body to ensure that `title`, `content`, and `author` fields are present.

### Authentication Middleware

Ensures that the user is authenticated before accessing certain routes.

### Error Handling Middleware

Handles errors and sends a JSON response with the error message and status code.

## Database

The database is MongoDB, used for storing posts and authors.

## License

This project is licensed under the MIT License.
