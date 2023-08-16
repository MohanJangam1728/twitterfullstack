const router = require('express').Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
const User  = require('../models/User.model')
const Tweet = require("../models/Tweets.model");
const Follower = require('../models/Follower.model');
const { isValidObjectId, isObjectIdOrHexString } = require('mongoose');
const {ObjectId} = require("mongodb")

const authenticationToken = (request, response, next) => {
    let jwtToken;
    const authToken = request.headers["authorization"];
    console.log(authToken);
    if (authToken !== undefined) {
      jwtToken = authToken.split(" ")[1];
    }
    if (jwtToken === undefined) {
      response.status(401);
      response.json({error:"Invalid JWT Token"});
    } else {
        jwt.verify(jwtToken, "MY_SECRET_CODE", async (error, payload) => {
          if (error) {
            response.status(401);
            response.json({error:"Invalid JWT Token"});
          } else {
            console.log(request.username,payload)
            request.username = payload.username;
            request.userid = payload.userid;
            request.name = payload.name;
            next();
          }
        });
      }
    };

router.route('/').get((req, res) => {
  res.send("Building backend for twitter")
});

router.route('/register').post(async(req, res) => {
    const {name,username,password,gender} = req.body;
    const hashedpassword = await bcrypt.hash(password,10);
    const user = await User.findOne({username:username});

    if(user===null){
        const newUser = new User({ name,username,password:hashedpassword,gender });

        newUser.save()
            .then(() => res.json('User is registered Successfully'))
            .catch(err => res.status(400).json({error:'Error while registering the user: ' + err}));
    } else {
        res.status(409).json({ error: 'Username already taken.Try different username' });
    }
});

router.route("/login").post(async(req,res)=>{
    const {username,password} = req.body;

    const dBUser = await User.findOne({username:username})
    
    if(dBUser === null){
        res.status(400).json({error:"Wrong username/User is not registered"})
    } else {
        const bcryptedPassword = await bcrypt.compare(password,dBUser.password)
        if(bcryptedPassword === true){
            const payload = { username: dBUser.username,userid:dBUser._id,name:dBUser.name };
            const jwtToken = jwt.sign(payload, "MY_SECRET_CODE");
            const isNewUser = await Follower.findOne({follower_user_id:dBUser._id}) === null
            const name = dBUser.name
            res.send({ jwtToken, isNewUser, name});
        } else {
            res.status(400).json({error:"Wrong password"})
        }
    }
})

router.route("/home/tweet").post(authenticationToken, async(req,res)=>{
    console.log(req.username)
    const {username,name} = req;
    const {tweet} = req.body;
    const user = await User.findOne({username:username});
    
    if(user !== null){
        const user_id = user._id;
        const newTweet = new Tweet({ user_id, tweet,name,username});
        newTweet.save()
            .then(() => res.json('Tweeted Successfully'))
            .catch(err => res.status(400).json({error:"Tweet Unsuccesfull"}));
    } else {
        res.status(400).json({error:"Invalid User"})
    }
})

router.route("/follow-people").get(authenticationToken, async(req,res)=>{
    console.log(req.username)
    const {username,userid} = req;
    const users = await User.find({ username: { $ne:username  } });
    // need to write filter on follower table
    if(users !== null){
        // console.log(users)
        res.json({users})
    } else {
        res.status(400).json({error:"No users found"})
    }
})

router.route("/follow").post(authenticationToken, async(req,res)=>{
    console.log(req.username,req.userid)
    const {username,userid} = req
    const {id} = req.query;
    // const {username} = req;
    const record = await Follower.findOne({ follower_user_id:userid,following_user_id:id });
    // console.log("rec",record)
    if(record === null){
        const newFollow = new Follower({follower_user_id:userid,following_user_id:id });
        newFollow.save()
            .then(() => res.json('Followed Successfully'))
            .catch(err => res.status(400).json({error:"Follow Unsuccesfull"}));
        
    } else {
        res.status(400).json({error:"Already Following"})
    }
});

router.route("/unfollow").delete(authenticationToken, (req,res)=>{
    console.log(req.username,req.userid)
    const {username,userid} = req
    const {id} = req.query;
    // const {username} = req;
    const deleteRecord = Follower.findOneAndDelete({ follower_user_id:userid,following_user_id:id });
    
    deleteRecord
        .then(() => res.json('Unfollowed Successfully'))
        .catch(err => res.status(400).json({error:"Unfollow Unsuccesfull"}));
})

router.route("/home/feed").get(authenticationToken, async(req,res)=>{
    console.log(req.username,req.userid)
    const {username,userid} = req
    
    
    const followerUserId = userid;
    try{
        const tweets = await Follower.aggregate([
    
        { $match: { follower_user_id:  new ObjectId(followerUserId) } },
    
    // Lookup to join with tweets collection based on following_user_id
    {
        $lookup: {
            from: 'tweets',
            localField: 'following_user_id',
            foreignField: 'user_id',
            as: 'tweets'
        }
    },
    // Unwind the tweets array
    { $unwind: '$tweets' },
    // // Sort the tweets by some criteria if needed
    { $sort: { 'tweets.createdAt': 1 } }, // Sorting by timestamp in descending order
    // // Group to restructure the result
    {
        $group: {
            _id: '$tweets._id', // Group by tweet ID
            tweet: { $first: '$tweets.tweet' }, // Get the first instance of the tweet
            userid: { $first: '$tweets.user_id' },
            name:{$first: '$tweets.name'},
            username:{$first: '$tweets.username'},
            tweetAt: { $first: '$tweets.createdAt' }
        }
    }
]);
    res.send(tweets)

}catch(err){
    res.status(400).json({err})
}

})




module.exports = router;
// app.get("/",(request,response)=>{
//     response.send("Building backend for twitter")
// })

// app.post("/register",async(request,response)=>{
//     console.log("register api called");
//     console.log(request.body)
//     const {name,username,password,gender} = request.body;
//     const hashedpassword = await bcrypt.hash(password,10);
//     console.log(hashedpassword)
//     const jwtToken = jwt.sign({name,password},"SECRET")
//     response.send({name,username,hashedpassword,gender,jwtToken})
// })

// app.post("/login",async(request,response)=>{
//     const {username,password} = request.body
//     response.send({username,password})
// })