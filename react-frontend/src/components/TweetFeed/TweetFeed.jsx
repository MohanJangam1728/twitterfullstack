import React, { useEffect, useState } from "react";
import "./TweetFeed.css";
import Avatars from "../../Icons/avatars";
import LikedIcon from "../../Icons/likedIcon";
import CommentIcon from "../../Icons/CommentIcon";
import LikeIcon from "../../Icons/likeIcon";
import Cookies from "js-cookie";
import axios from "axios";
import baseurl from "../BaseUrl";
import { Tooltip } from "react-tooltip";
import LoadingSvg from "../../Icons/loading";

const TweetFeed = () => {
  let cacheAvatar = {};
  const [loading, setLoading] = useState(true);
  const [userComment, setUserComment] = useState("");
  const [feed, setFeed] = useState([]);
  const [likedFeeds, setLikedFeeds] = useState([]);
  const [openComments, setOpenComments] = useState([]);
  const [comments, setComments] = useState({});
  const openCommentSection = async (tweet_id) => {
    if(openComments.includes(tweet_id)){
      const indexToRemove = openComments.indexOf(tweet_id);
      if (indexToRemove !== -1) {
        openComments.splice(indexToRemove, 1);
        setOpenComments([...openComments])
      }
      return
    }
    setOpenComments([...openComments,tweet_id]);

    try {
      let options = {
        method: "GET",
        url: `${baseurl}/home/comments?id=${tweet_id}`,
        headers: {
          authorization: `Bearer ${Cookies.get("authToken")}`,
        },
      };
      const res = await axios(options);
      // setComments(res.data);
      console.log("commets", res);
      res.data.forEach((item) => {
        item.createdAt = new Date(item.createdAt);
      });

      // Sort the array based on the datetime attribute
      res.data.sort((a, b) => b.createdAt - a.createdAt);
      let x= {}
      x[tweet_id] = res.data
      // console.log({...comments,...x},"dsfsdfsdfsd")
      setComments({...comments,...x});
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  const getLatestFeed = async () => {
    try {
      let options = {
        method: "GET",
        url: `${baseurl}/home/feed`,
        headers: {
          authorization: `Bearer ${Cookies.get("authToken")}`,
        },
      };
      const res = await axios(options);
      console.log("feed", res.data);
      let newFeed = res.data.tweets;
      setLikedFeeds(res.data.userLikedFeed);
      newFeed.forEach((item) => {
        item.tweetAt = new Date(item.tweetAt);
      });

      // Sort the array based on the datetime attribute
      newFeed.sort((a, b) => b.tweetAt - a.tweetAt);

      setFeed(newFeed);
      setLoading(false);
    } catch (err) {
      alert(err.response.data.error);
    }
  };
  // let x= setInterval(getLatestFeed,3000)
  useEffect(() => {
    getLatestFeed();
  }, []);
  const handleUnlike = async (tweet_id) => {
    console.log("unlike");
    try {
      let options = {
        method: "DELETE",
        url: `${baseurl}/home/unlike_tweet?id=${tweet_id}`,
        headers: {
          authorization: `Bearer ${Cookies.get("authToken")}`,
        },
      };
      const res = await axios(options);

      const newArray = likedFeeds.filter((item) => item !== tweet_id);
      setLikedFeeds(newArray);
    } catch (err) {
      alert(err.response.data.error);
    }
  };
  const handleLike = async (tweet_id) => {
    console.log("like");
    try {
      let options = {
        method: "POST",
        url: `${baseurl}/home/like_tweet?id=${tweet_id}`,
        headers: {
          authorization: `Bearer ${Cookies.get("authToken")}`,
        },
      };
      const res = await axios(options);
      // alert("Liked the tweet")
      setLikedFeeds([...likedFeeds, tweet_id]);
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  const handleComment = async (tweet_id) => {
    console.log("comment");
    try {
      let options = {
        method: "POST",
        url: `${baseurl}/home/comment_tweet?id=${tweet_id}`,
        data: { userComment },
        headers: {
          authorization: `Bearer ${Cookies.get("authToken")}`,
        },
      };
      const res1 = await axios(options);
      // alert("Liked the tweet")
      setUserComment("");

      let options1 = {
        method: "GET",
        url: `${baseurl}/home/comments?id=${tweet_id}`,
        headers: {
          authorization: `Bearer ${Cookies.get("authToken")}`,
        },
      };
      const res = await axios(options1);
      // setComments(res.data);
      console.log("commets", res);
      res.data.forEach((item) => {
        item.createdAt = new Date(item.createdAt);
      });

      // Sort the array based on the datetime attribute
      res.data.sort((a, b) => b.createdAt - a.createdAt);
      let x= {}
      x[tweet_id] = res.data
      // console.log({...comments,...x},"dsfsdfsdfsd")
      setComments({...comments,...x});
      // setComments(res.data);

    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <>
      {loading && <LoadingSvg />}

      {feed.map((each) => {
        return (
          <>
            <div key={each._id} className="tweet-feed-main">
              <div className="tweet-feed-main-avatar-profile">
                <Avatars
                  username={each.username}
                  cacheAvatar={cacheAvatar}
                ></Avatars>

                <h4>{each.name}</h4>
                <span>@{each.username}</span>
              </div>
              <div className="tweet-feed">
                <p>{each.tweet}</p>
              </div>
              <div className="tweet-feed-main-likes-comments">
                {each.likesCount + (likedFeeds.includes(each._id) ? 1 : 0) >
                0 ? (
                  <span
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={each.likedUserNames.join(" , ")}
                  >
                    <LikedIcon></LikedIcon>
                    {each.likesCount + (likedFeeds.includes(each._id) ? 1 : 0)}
                    <Tooltip
                      place="bottom"
                      style={{
                        width: "150px",
                        textAlign: "center",
                        backgroundColor: "rgb(102,94,247)",
                      }}
                      id="my-tooltip"
                    />
                  </span>
                ) : (
                  <span></span>
                )}

                {each.commentsCount > 0 ||(each._id in comments && comments[each._id].length>0 )? (
                  <span
                    onClick={() => openCommentSection(each._id)}
                    style={{ cursor: "pointer" }}
                  >
                    {/* {each.commentsCount} comments */}
                     {each._id in comments?comments[each._id].length:each.commentsCount} comments
                  </span>
                ) : (
                  <span></span>
                )}
              </div>
              <hr />
              <div className="tweet-feed-main-like-comment">
                <div
                  onClick={() =>
                    likedFeeds.includes(each._id)
                      ? handleUnlike(each._id)
                      : handleLike(each._id)
                  }
                >
                  <LikeIcon liked={likedFeeds.includes(each._id)}></LikeIcon>
                </div>
                <div onClick={() => openCommentSection(each._id)}>
                  <CommentIcon></CommentIcon>
                </div>
                {/* <LikeIcon></LikeIcon>
                    <CommentIcon></CommentIcon> */}
              </div>
              {openComments.includes(each._id) && <div
                // style={{
                //   display:
                //     openComments.includes(each._id)
                //       ? ""
                //       : "none",
                // }}
              >
                <hr />
                <div className="post-thought">
                  <Avatars styles={{ borderTop: "none", cursor: "pointer" }} />
                  <input
                    onChange={(e) => {e.preventDefault();setUserComment(e.target.value)}}
                    value={userComment}
                    style={{
                      width: "400px",
                      border: "none",
                      borderBottom: "2px solid black",
                      paddingBottom: "12px",
                    }}
                    maxLength="50"
                    placeholder={`Leave your comments...`}
                  />

                  <img
                    onClick={() => handleComment(each._id)}
                    src="sendcomment.jpg"
                    style={{ cursor: "pointer", width: "50px" }}
                  />
                  {/* <TweetIcon onClick={()=>{}}></TweetIcon> */}
                </div>
                <div style={{backgroundColor:"#f3f3ef",borderRadius:"20px",padding:"10px",paddingRight:"0",marginLeft:"auto",width:"90%"}}>
                  {comments[each._id] && comments[each._id].map((comment) => {
                    return (
                      // <div>
                        <div style={{ display: "flex",alignItems:"center",marginBottom:"10px" }}>
                          <Avatars style={{alignSelf:"flex-start"}}></Avatars>
                          <div style={{ display: "flex",flexDirection:"column"}}>
                            <div>
                            <h4 style={{margin:0}}>{comment.name}</h4>
                            
                            </div>
                            <p style={{margin:0}}>{comment.comment}</p>
                          </div>
                        </div>
                      // </div>
                    );
                  })}
                </div>
              </div>}
            </div>
          </>
        );
      })}
    </>
  );
};

export default TweetFeed;
