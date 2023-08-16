import React, { useEffect, useState } from 'react';
import './FollowPeople.css'
import axios from 'axios';
import Avatars from '../../Icons/avatars';
import Cookies from 'js-cookie';
import { Navigate,useNavigate } from 'react-router-dom';
import baseurl from '../BaseUrl';

function FollowPeople() {
    const navigate = useNavigate()
    const [suggestPeople,setSuggestPeople] = useState([]);
    const [followingIds,setFollowingIds] = useState([]);

    const getSuggestedPeople = async()=>{
        try{
            let options = {
                method:"GET",
                url:`${baseurl}/follow-people`,
                headers:{
                    authorization:`Bearer ${Cookies.get("authToken")}`
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

    useEffect(()=>{
        getSuggestedPeople()
    },[]);

    const jwtToken = Cookies.get('authToken')
    console.log("jwt",jwtToken)
    if (jwtToken === undefined) {
        // return <redirect to="/login" />
        return <Navigate to='/login' />
    }

    const handleNext = (e) => {
        navigate("/home")
    }
    
    const handleFollow = async(person) => {
        console.log("handleFollow",person)
        try{
            let options = {
                method:"POST",
                url:`${baseurl}/follow?id=${person._id}`,
                headers:{
                    authorization:`Bearer ${Cookies.get("authToken")}`
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
        // try{
        //     let options = {
        //         method:"DELETE",
        //         url:`${baseurl}/unfollow?id=${person._id}`,
        //         headers:{
        //             authorization:`Bearer ${Cookies.get("authToken")}`
        //         }
        //     }
        //     const res = await axios(options)
        //     console.log(res)
            
        //     setFollowingIds(followingIds.filter((each)=>each !== person._id))
        // }catch(err){
        //     alert(err.response.data.error)
        // }
    }

    

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
            <button onClick={handleNext} disabled={followingIds.length>=1?false:true}>
                {followingIds.length>=1?'Next':'Follow atleast one to proceed'}
            </button>
        </div>
    </div>
  )
}

export default FollowPeople
