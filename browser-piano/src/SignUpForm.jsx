/*SignUpForm.jsx*/

import React, { useState} from 'react'
import './SignUpForm.css'
import { Link } from 'react-router-dom'
import { app } from './firebase.js'
import { auth } from './firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'


// Sets up Sign up form parameters, Email and Password
const SignUpForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            createUserWithEmailAndPassword(auth, email, password)
            console.log("Account Created")
        } catch(err) {
            console.log(err)
        }
    }


// Sets up input for Email and Password
// includes link back to piano page on line 32
// includes link to login page on line 45
  return (
    <div className='signup-container'>
        <Link to="/App" className="back-button">Back</Link>

        <form className='signup-form' onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <label htmlFor="email">
                Email:
                <input type="text" onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label htmlFor="password">
                Password:
                <input type="password" onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <button type='submit'>Sign Up</button> <br />
            <p>Already Registered? <Link to="/login">Login</Link></p>
        </form>
    </div>
  )
}

export default SignUpForm
