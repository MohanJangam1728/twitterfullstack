const mongoose = require("mongoose")

const followerSchema = new mongoose.Schema({
    follower_user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    following_user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
})

const Follower = mongoose.model('Follower', followerSchema);

module.exports = Follower;