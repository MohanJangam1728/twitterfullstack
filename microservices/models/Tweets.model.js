const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
  tweet: {
    type: String,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
},{
    timestamps: true,
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
