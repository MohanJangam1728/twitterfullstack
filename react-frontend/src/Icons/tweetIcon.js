import React from "react";

const TweetIcon = (props) => {
    const {onClick} = props
    return (
        <svg onClick={onClick} style={{cursor:"pointer",height:"30px",width:"30px",marginLeft:"10px"}} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 64 64" viewBox="0 0 64 64" id="send"><polygon points="20.9 30.6 21.7 56.4 64 9.5"></polygon><polygon points="0 11.2 20.1 28.7 63.3 7.6"></polygon></svg>
    )
}

export default TweetIcon