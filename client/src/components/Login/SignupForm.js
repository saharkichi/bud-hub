import React, { useState } from 'react';


import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

function SignupForm() {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
      });
      const [addUser] = useMutation(ADD_USER);
    
      const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };
    
      const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
    
        try {
          const { data } = await addUser({
            variables: { ...formState },
          });
    console.log("success")
          Auth.login(data.addUser.token);
        } catch (e) {
          console.error(e);
        }
      };
    
    return(
        <form onSubmit={handleFormSubmit}>
            <div className="container">
                <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr></hr>
                    <label htmlFor="username"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="username" required value={formState.username}
                  onChange={handleChange}/>
                    <label htmlFor="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" required value={formState.email}
                  onChange={handleChange}/>
                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password" required value={formState.password}
                  onChange={handleChange}/>
                        
        
                        

                        <div className="clearfix">
                            <button type="submit" className="signupbtn">Sign Up</button>
                        </div>
            </div>
        </form>
    )
}

export default SignupForm