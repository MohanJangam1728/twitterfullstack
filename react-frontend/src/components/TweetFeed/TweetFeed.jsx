import React, { useEffect, useState } from "react";
import "./TweetFeed.css"
import Avatars from "../../Icons/avatars";
import LikedIcon from "../../Icons/likedIcon";
import CommentIcon from "../../Icons/CommentIcon";
import LikeIcon from "../../Icons/likeIcon";
import Cookies from "js-cookie";
import axios from "axios";
import baseurl from "../BaseUrl";
const TweetFeed = () => {
    let cacheAvatar = {}
    const [feed,setFeed] = useState([]);
    const [likedFeeds,setLikedFeeds] = useState([]);
    const getLatestFeed = async() => {
        try{
            let options = {
                method:"GET",
                url:`${baseurl}/home/feed`,
                headers:{
                    authorization:`Bearer ${Cookies.get("authToken")}`
                }
            }
            const res = await axios(options);
            console.log("feed",res.data)
            let newFeed = res.data
            newFeed.forEach(item => {
                item.tweetAt = new Date(item.tweetAt);
            });
            
            // Sort the array based on the datetime attribute
            newFeed.sort((a, b) => b.tweetAt - a.tweetAt);
            
            setFeed(newFeed)
        }catch(err){
            alert(err.response.data.error)
        }
    };
    // let x= setInterval(getLatestFeed,3000)
    useEffect(()=>{
        getLatestFeed()
    },[]);
    
    const handleLike = async(tweet_id) => {
        try{
            let options = {
                method:"POST",
                url:`${baseurl}/home/like_tweet?id=${tweet_id}`,
                headers:{
                    authorization:`Bearer ${Cookies.get("authToken")}`
                }
            }
            const res = await axios(options);
            // alert("Liked the tweet")
            setLikedFeeds((likedFeeds)=>[...likedFeeds,tweet_id])
            
        }catch(err){
            alert(err.response.data.error)
        }
    }
    

    return (<>
            {feed.map((each)=>{
                return <div key={each._id} className="tweet-feed-main">
                
                <div className="tweet-feed-main-avatar-profile">
                    <Avatars username={each.username} cacheAvatar={cacheAvatar}></Avatars>
                    
                    <h4>{each.name}</h4>
                    <span>@{each.username}</span>
                </div>
                <div className="tweet-feed">
                    <p>{each.tweet}</p>
                </div>
                <div className="tweet-feed-main-likes-comments">
                    <span>
                        <LikedIcon></LikedIcon>2
                    </span>
                    
                    <span>13 comments</span>
                </div>
                <hr/>
                <div className="tweet-feed-main-like-comment">
                    <div onClick={()=>handleLike(each._id)}><LikeIcon liked={likedFeeds.includes(each._id)}></LikeIcon></div>
                    <div><CommentIcon></CommentIcon></div>
                    {/* <LikeIcon></LikeIcon>
                    <CommentIcon></CommentIcon> */}
                </div>

                
                </div>
                
            })}
            </>
    
        
        
    

    )
};

export default TweetFeed