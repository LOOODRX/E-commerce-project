import React from 'react'
import './CSS/Loginsignup.css'
import { useState } from 'react'

const LoginSignup = () => {

  const [state,setState] = useState("Login")
  const [formData,setformData] = useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler = (e) =>{
    setformData({...formData,[e.target.name]:e.target.value})
    
  }

  const login = async () => {
    console.log("Login Function excuted",formData)
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-type':'application/json'
      },
      body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)
  
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/")
    }
    else{
      alert(responseData.errors)
    }
  }
  const signup = async () => {
    console.log("Signup Function excuted",formData)
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-type':'application/json'
      },
      body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)
  
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/")
    }
    else{
      alert(responseData.errors)
    }
  }
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==="Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name" />:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder="Email Address" />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder="Password" />
        </div>
        <button onClick={()=>(state==="Login"?login():signup())}>Continue</button>
        {state==="Sign Up"
          ?<p className='loginsignup-login'>Already have a account? <span onClick={()=>{setState("Login")}}>Login here</span></p>
          :<p className='loginsignup-login'>Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>
        }
        <div className="loginsignup-agree">
          <input type="checkbox" name = '' id ='' />
          <p>By continuing, I agre to the terms of use & praivacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
