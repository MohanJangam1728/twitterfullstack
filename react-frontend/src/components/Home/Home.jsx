import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Home.css"
import Avatars from "../../Icons/avatars";
import TweetIcon from "../../Icons/tweetIcon"
import TweetFeed from "../TweetFeed/TweetFeed";
import Cookies from "js-cookie";
import baseurl from "../BaseUrl";

const Home = () => {
    const [tweet,setTweet] = useState("");
    const [userowntweets,setUserowntweets] = useState([])
    const [tweetErr, setTweetErr] = useState("");
    const handleTweetMsg = (e) => {
        // console.log(e.target.value.trim(""))
        setTweet(e.target.value.trimStart(""))
    }
    // useEffect(()=>{

    // })
    const handleTweet = async() => {
        console.log("handletwet")
        if (tweet.trim("").length<=50 && tweet.trim("").length >= 5){
            setTweetErr("")
            try{
                let options = {
                    method:"POST",
                    url:`${baseurl}/home/tweet`,
                    data:{
                        tweet
                    },
                    headers:{
                            Authorization: `Bearer ${Cookies.get("authToken")}`,
                    }
                }
                const res = await axios(options);
                setTweet("")
            }
            catch(error){
                alert(error.response.data.error)
            }
        } else {
            console.log("Tweet should contain atleaset 5 and atmost 50 characters")
            setTweetErr("Tweet should contain atleaset 5 and atmost 50 characters")
        }
        
    }
    return (
        <div className="home-main">
            <div className="post-thought">
                <Avatars></Avatars>
                <textarea value={tweet} onChange={(e)=>handleTweetMsg(e)} id="tweetmsg" maxLength="50" placeholder={`Hi ${Cookies.get('name')} Post your thoughts...`}></textarea>
                
                <TweetIcon onClick={handleTweet}></TweetIcon>
            </div>

            {tweetErr &&<span className="tweetErr">{tweetErr}</span>}
            
            <TweetFeed></TweetFeed>
            
        </div>
    )
}

export default Home;