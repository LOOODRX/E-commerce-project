import React from 'react'
import './CSS/Loginsignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have a account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name = '' id ='' />
          <p>By continuing, I agre to the terms of use & praivacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
