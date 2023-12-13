import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'
function Login(){
  return (
    <div class="login-container">
        <form class="login-form">
            <h2>Login</h2>
{/* <!--             
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" pattern="[A-Za-z]+" title="Only characters are allowed" required> --> */}
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" title="Please enter a valid email address" required/>
            
            <label for="password">Password:</label>
            <div class="password-container">
            <input type="password" id="password" name="password" minlength="8" title="Minimum 8 characters required" required/>
            </div>
            
            <button type="submit" class="sign">Login</button>
            <br></br>
            <p><b>Not yet registered?</b><span><Link to='/register'>Sign up</Link></span></p>
        </form>
    </div>
  )
}
export default Login
