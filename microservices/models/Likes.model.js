const mongoose = require('mongoose');

const LikesSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  tweet_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tweet',
    required: true,
  }
});

const Likes = mongoose.model('Likes', LikesSchema);

module.exports = Likes;
