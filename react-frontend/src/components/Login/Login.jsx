import React,{useState} from "react";
import "./Login.css";
import axios from "axios";
import {  useNavigate } from 'react-router-dom';

const Login = () =>{
    const navigate = useNavigate()
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const submitHandler = async(event) => {
        event.preventDefault();
        try{
            const options = {
                url:"http://localhost:5000/login",
                method:"POST",
                data:{
                    username,password
                }
            }
            const res = await axios(options)
            console.log(res.data.jwtToken)
            localStorage.setItem("authToken",res.data.jwtToken)
            // navigate('/home')
            navigate('/follow-people')
        }catch(err){
            console.log(err);
            alert(err.response.data.error)
            
        }
    }

    const handleStateChange =(e,setFunction) => {
        setFunction(e.target.value)
    }
    
    return(
        <div className="main1">
        <div className="main2">
            <form onSubmit={submitHandler}>
                <label id="login-username">Username</label>
                <br/>
                <input value={username} onChange={(e)=>handleStateChange(e,setUsername)} pattern="[A-Za-z0-9]+" required htmlFor="login-username" minLength={6} type='text'/>
                <br/>
                <label id="login-password">Password</label>
                <br/>
                <input value={password} onChange={(e)=>handleStateChange(e,setPassword)} required htmlFor="login-password" minLength={6} type='password'/>
                <br/>
                
                <input type="submit" value="Login"/>
            </form>
            <button onClick={()=>navigate("/register")}>Not a member? Register</button>
        </div>
        
        </div>
    )
}

export default Login;