import React from 'react'

import './Form.css'
const Register = () => {
  return (
    <div className="body">
    <div className="container">
        <form action="http://localhost:5501/register" encType='true' method='POST'>
          <div className="detail">
          <h1>Good Morning, Master</h1>
          <p>Please, enter your details</p>
          <h1>Registration Form</h1>
          </div>
          <div className="input-field">
            
          <input type="text" placeholder='Username' name='username' />
        
          <input type="email" placeholder='Email' name='email'/>
          <input type="password" placeholder='Password' name='password'/>
          <input type="password" placeholder='Confirm Password' name='confirmpassword'/>
          </div>
        
          <div className="verify">
            <button type='submit'>Register</button>
           
          </div>
    
        </form>
        <img src="https://imgs.search.brave.com/FaD6XSk6HP-vkXz8Lqzz64XB0QLZrdeUMvZ4ZmysOrM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzIwLzczLzI4/LzM2MF9GXzcyMDcz/Mjg2Nl94amJTamV0/bkxocGptbHNja3o5/T21vUnh2Qnh1eWRo/MS5qcGc" alt="" />
    </div>
    
    </div>
  )
}

export default Register
