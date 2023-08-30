const mongoose = require('mongoose');

const CommentsSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  tweet_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tweet',
    required: true,
  },
  comment:{
    type:String,
    required:true
  }
},{
    timestamps: true,
});

const Comments = mongoose.model('Comments', CommentsSchema);

module.exports = Comments;
