const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  creatorId: {
    type: mongoose.Schema.Type.ObjectId,
    ref: 'User',
    required: true
  },
  picPath: {
    type: String
  },
  picName: {
    type: String
  }
});

const Post = mongoose.Model('Post', postSchema);

module.exports = Post;
