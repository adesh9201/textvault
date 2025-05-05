const express = require('express');
const { createPost, getPosts, deletePost } = require('../controllers/postController');

const router = express.Router();

router.post('/posts', createPost);
router.get('/posts', getPosts);
router.delete('/posts/:id', deletePost); 

module.exports = router;