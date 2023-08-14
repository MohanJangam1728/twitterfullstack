import React from "react";
import "./TweetFeed.css"
import Avatars from "../../Icons/avatars";
import LikedIcon from "../../Icons/likedIcon";
import CommentIcon from "../../Icons/CommentIcon";
import LikeIcon from "../../Icons/likeIcon";
const TweetFeed = () => {
    return (
        <div className="tweet-feed-main">
            
            <div className="tweet-feed-main-avatar-profile">
                <Avatars></Avatars>
                <h4>Mohan Jangam</h4>
                <span>@mohan1728</span>
            </div>
            <div className="tweet-feed">
                <p>hello this is my first feed from twitter</p>
            </div>
            <div className="tweet-feed-main-likes-comments">
                <span>
                    <LikedIcon></LikedIcon>2
                </span>
                
                <span>13 comments</span>
            </div>
            <hr/>
            <div className="tweet-feed-main-like-comment">
                <div><LikeIcon></LikeIcon><span>Like</span></div>
                <div><CommentIcon></CommentIcon><span>Comment</span></div>
                {/* <LikeIcon></LikeIcon>
                <CommentIcon></CommentIcon> */}
            </div>
        </div>
        
    

    )
};

export default TweetFeed