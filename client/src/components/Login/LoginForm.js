import React, { useState } from 'react';
import "./style.css";

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations'

import Auth from '../../utils/auth';

const LoginForm = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login] = useMutation(LOGIN_USER);

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
        <form onSubmit={handleFormSubmit}>
            

            <div className="container">
            <h1>Login</h1>
                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Username" name="email" required value={formState.email}
                  onChange={handleChange}/>
                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" required value={formState.password}
                  onChange={handleChange}/>
                <button type="submit" className='loginbtn'>Login</button>
                    
            </div>

        </form>
    )
}

export default LoginForm