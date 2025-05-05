const Post = require('../models/Post');
require('dotenv').config();

// Post a new text
const SECRET_PASSWORD = process.env.SECRET_PASSWORD;

const createPost = async (req, res) => {
    try {
        const { text, password } = req.body;

        // Check if password is provided
        if (!password) {
            return res.status(400).json({ error: 'Password is required' });
        }

        // Check if the provided password matches the secret password
        if (password !== SECRET_PASSWORD) {
            return res.status(401).json({ error: 'Unauthorized: Incorrect password' });
        }

        // Create and save the new post
        const newPost = await Post.create({ text });
        res.status(201).json(newPost);

    } catch (error) {
        // Log the error for debugging
        console.error(error);
        res.status(500).json({ error: 'Failed to create post' });
    }
};

// Get all posts
const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
};

// Delete a post
const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPost = await Post.findByIdAndDelete(id);
        if (!deletedPost) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete post' });
    }
};

module.exports = { createPost, getPosts, deletePost };