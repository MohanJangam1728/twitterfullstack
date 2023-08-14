import React, { useEffect, useState } from 'react';
import './FollowPeople.css'
import axios from 'axios';
import Avatars from '../../Icons/avatars';

function FollowPeople() {
    const [suggestPeople,setSuggestPeople] = useState([]);
    const [followingIds,setFollowingIds] = useState([]);
    const getSuggestedPeople = async()=>{
        try{
            let options = {
                method:"GET",
                url:'http://localhost:5000/follow-people',
                headers:{
                    authorization:`Bearer ${localStorage.getItem("authToken")}`
                }
            }
            const res = await axios(options)
            console.log("res",res.data.users)
            setSuggestPeople(res.data.users)
        }
        catch(err){
            alert(err.response.data.error)
        }
        
    };
    const handleFollow = async(person) => {
        console.log("handleFollow",person)
        try{
            let options = {
                method:"POST",
                url:`http://localhost:5000/follow?id=${person._id}`,
                headers:{
                    authorization:`Bearer ${localStorage.getItem("authToken")}`
                }
            }
            const res = await axios(options)
            console.log(res)
            setFollowingIds([...followingIds,person._id])
        }catch(err){
            alert(err.response.data.error)
        }
    }

    const handleUnfollow = async(person) => {
        console.log("handleUnfollow",person)
        try{
            let options = {
                method:"DELETE",
                url:`http://localhost:5000/unfollow?id=${person._id}`,
                headers:{
                    authorization:`Bearer ${localStorage.getItem("authToken")}`
                }
            }
            const res = await axios(options)
            console.log(res)
            
            setFollowingIds(followingIds.filter((each)=>each !== person._id))
        }catch(err){
            alert(err.response.data.error)
        }
    }

    useEffect(()=>{
        getSuggestedPeople()
    },[]);

  return (
    <div className='follow-people-main'>
        
        <div className='people-list'>
            <h4>People you may like</h4>
            <div>
            {suggestPeople.map((person)=>{
                return <div key={person._id}>
                        <div>
                            <Avatars></Avatars>
                            {person.name}
                        </div>
                        {followingIds.includes(person._id) ? 
                            <button onClick={()=>handleUnfollow(person)} style={{backgroundColor:'rgb(12,103,194)',color:'white'}}>Following</button>:
                            <button onClick={()=>handleFollow(person)}>+ Follow</button>
                        }
                        
                    </div>
            })}
            </div>
        </div>
    </div>
  )
}

export default FollowPeople
