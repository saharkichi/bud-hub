import Loginform from './LoginForm';
import SignupForm from './SignupForm';
import React from 'react';
import "./style.css";

function LoginPage() {
    return (
     <div>
         <Loginform/>
         <SignupForm/>
        
     </div>
    )
}

export default LoginPage