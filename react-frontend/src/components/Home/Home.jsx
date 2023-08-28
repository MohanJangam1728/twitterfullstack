import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import "./Home.css"
import Avatars from "../../Icons/avatars";
import TweetIcon from "../../Icons/tweetIcon"
// import TweetFeed from "../TweetFeed/TweetFeed";
import Cookies from "js-cookie";
import baseurl from "../BaseUrl";
import {  Navigate, useNavigate } from 'react-router-dom';
import { Menu, MenuItem } from '@mui/material';
const TweetFeed = React.lazy(()=>import("../TweetFeed/TweetFeed"));

const Home = () => {
    const navigate = useNavigate();
    const [tweet,setTweet] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    // const [userowntweets,setUserowntweets] = useState([])
    const [tweetErr, setTweetErr] = useState("");
    const handleTweetMsg = (e) => {
        // console.log(e.target.value.trim(""))
        setTweet(e.target.value.trimStart(""))
    }
    
    const authToken = Cookies.get("authToken");
    console.log("auttt",authToken)
    if(authToken === undefined){
        return <Navigate to="/login"/>
    };
    const handleLogout = () => {
        Cookies.remove("name")
        Cookies.remove("authToken")
        navigate("/login");
    }
    const handleProfileClick = (event) => {
        console.log("profile clicked")
        setAnchorEl(event.currentTarget);
      };
    
      const handleProfileClose = () => {
        setAnchorEl(null);
      };
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
                <Avatars styles={{cursor:"pointer"}} onClick={handleProfileClick}/>
                <textarea value={tweet} onChange={(e)=>handleTweetMsg(e)} id="tweetmsg" maxLength="50" placeholder={`Hi ${Cookies.get('name')} Post your thoughts...`}></textarea>
                
                <TweetIcon onClick={handleTweet}></TweetIcon>
            </div>
            <Menu
            data-testid='fileUploadMenu'
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleProfileClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            // PaperProps={{sx:{color:"red",left:"200px"}}}
            transformOrigin={{ horizontal: 'left', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          >
            <MenuItem>
              My Profile
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              Logout
            </MenuItem>
          </Menu>

            {tweetErr &&<span className="tweetErr">{tweetErr}</span>}
            <Suspense fallback={<div>Loading.....</div>}>
                <TweetFeed/>
            </Suspense>
            
            
        </div>
    )
}

export default Home;