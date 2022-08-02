import React, { useState } from 'react';
import "./style.css";

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations'

import Auth from '../../utils/auth';

const LoginForm = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

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