const fs = require("fs");
const path = require("path");
const mongoose = require('mongoose');
const dbFilePath = path.join(__dirname, "db.json");

const connectDB = async () => {
    const mongoURI = process.env.MONGO_URI || 'mongodb://0.0.0.0/blogging';
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

const readDB = () => {
    const data = fs.readFileSync(dbFilePath, "utf-8");
    return JSON.parse(data);
};

const writeDB = (data) => {
    fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2));
};

module.exports = { connectDB, readDB, writeDB };