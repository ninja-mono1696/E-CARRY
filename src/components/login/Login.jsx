import React from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginFalureAction, loginRequestAction, loginSuccsesAction } from "../../redux/authReducer/action";


const Login = () => {
  const[email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  // const 

  let dispatch=useDispatch();

  const handleLogin=()=>{
    let userData={
      email,
      password
    };
    dispatch(loginRequestAction());
    axios.post("https://reqres.in/api/login",userData).then((res)=>{
      console.log(res.data.token);
      dispatch(loginSuccsesAction(res.data.token));
    }).catch((err)=>{
      console.log(err);
    })
  };

  return <div>
    <h1>Login</h1>
    <input 
    type="email" 
    value={email} 
    placeholder="Email" 
    onChange={(e)=>setEmail(e.target.value)} />
    <input type="password"
    value={password} 
    placeholder="Password" 
    onChange={(e)=>setPassword(e.target.value)}
     />
     <button onClick={handleLogin}>Submit</button>
  </div>;
};

export default Login;
