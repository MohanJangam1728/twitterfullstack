import React,{ useState} from "react";
import "./Register.css";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import baseurl from "../BaseUrl";

const Register = () =>{
    const navigate = useNavigate()
    const [name,setName] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [gender,setGender] = useState("male");

    const submitHandler = async(event) => {
        event.preventDefault();
        console.log("Clicked submit",event)
        try{
            let options={
                url:`${baseurl}/register`,
                method:"POST",
                data:{
                    name,
                    username,
                    password,
                    gender
                },
            }
            const res = await axios(options);
            console.log("res",res)
            navigate('/login',
                {state: { registrationSuccess: true, username: username }
            }
            );
        }
        
        catch(error){
            console.log("er",error.response.data.error)
            alert(error.response.data.error)
        }
    }

    const handleStateChange =(e,setFunction) => {
        setFunction(e.target.value)
    }
    
    return(
        <div className="main1">
        <div className="main2">
            <form onSubmit={submitHandler}>
                <label id="reg-name">Name</label>
                
                <input value={name} onChange={(e)=>handleStateChange(e,setName)} required htmlFor="reg-name" minLength={6} type='text'/>
                
                <label id="reg-username">Username</label>
                
                <input value={username} onChange={(e)=>handleStateChange(e,setUsername)} pattern="[A-Za-z0-9]+" required htmlFor="reg-username" minLength={6} type='text'/>
                
                <label id="reg-password">Password</label>
                
                <input value={password} onChange={(e)=>handleStateChange(e,setPassword)} required htmlFor="reg-password" minLength={6} type='password'/>
                <div>
                <label>Gender</label>
                <br/>
                <label id="male">Male</label>
                <input onChange={(e)=>handleStateChange(e,setGender)} htmlFor="male" type='radio' value="male" name="gender" defaultChecked/>
                <label id="female">Female</label>
                <input onChange={(e)=>handleStateChange(e,setGender)} htmlFor="female" type='radio' value="female" name="gender"/>
                </div>
                <input type="submit" value="Register"/>
            </form>
            <button onClick={()=>navigate('/login')}>Already a member? Login</button>
        </div>
        
        </div>
    )
}

export default Register;