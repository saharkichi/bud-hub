import React from 'react';
import "./style.css";

function LoginForm() {
    return (
        <form action="action_page.php" method="post">
            

            <div className="container">
            <h1>Login</h1>
                <label htmlFor="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required/>
                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>
                <button type="submit" className='loginbtn'>Login</button>
                    <label>
                        <input type="checkbox" defaultChecked="checked" name="remember"/> Remember me 
                    </label>
            </div>

        </form>
    )
}

export default LoginForm