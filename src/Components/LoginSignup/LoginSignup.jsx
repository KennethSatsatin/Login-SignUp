import React, { useState } from 'react';
import './LoginSignup.css';

import email_icon from '../Assets/mail.png';
import user_icon from '../Assets/user.png';
import password_icon from '../Assets/password.png';

const LoginSignup = () => {

    const [action, setAction] = useState("Login");

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login"?<div></div>: <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='Name'/>
                </div>}
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='Email address'/>
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Password'/>
                </div>
                {action === "Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click Here</span></div>} 
                <div className="submit-container">
                    <div className={action ==="Login"?"submit green":"submit"} onClick={()=> {setAction("Sign Up")}}>Sign Up</div>
                    <div className={action ==="Sign Up"?"submit green":"submit"} onClick={()=> {setAction("Login")}}>Login</div>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup
