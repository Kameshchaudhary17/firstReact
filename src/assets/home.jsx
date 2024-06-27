import React from 'react'
import './home.css'

const home = () => {
  return (
    <div className="body">
    <div className="container">
        <form action="">
          <div className="detail">
          <h1>Good Morning, Master</h1>
          <p>Please, enter your details</p>
          </div>
          <div className="input-field">
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          </div>
          <div className="check">
          <div className="checkbox">
            <input type="checkbox" />
            <p>Remember me</p>
          </div>
          <p>forget password?</p>
          </div>
          <div className="verify">
            <button >Login In</button>
            <p>------ or ------</p>
            <button>Login with Google</button>
          </div>
    
        </form>
        <img src="https://imgs.search.brave.com/FaD6XSk6HP-vkXz8Lqzz64XB0QLZrdeUMvZ4ZmysOrM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzIwLzczLzI4/LzM2MF9GXzcyMDcz/Mjg2Nl94amJTamV0/bkxocGptbHNja3o5/T21vUnh2Qnh1eWRo/MS5qcGc" alt="" />
    </div>
    </div>
  )
}

export default home
