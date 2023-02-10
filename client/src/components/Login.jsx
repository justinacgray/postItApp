import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Navigate, useParams } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  // const navigate = Navigate()
  const { username } = useParams()

  const userLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:7000/api/users/login', {
      email: email,
      password: password
    },
      {
        // helps sets cookies values
        withCredentials: true,

      }
    )
      .then((res) => {
        console.log("RESPONSE ==>", res)
        // todo => upon success navigate where?
      })
      .catch((err) => {
        console("ERROR ===>", err)
        setErrorMessage('err.response.data.message')
      })
  }

  return (
    <>
      <p className='error-text'> {errorMessage ? errorMessage : null} </p>
      <form onSubmit={userLogin} className="input-group" id='login'>
        <input type="email" className="input-field" placeholder="Email" name="email" value={email} required />
        <input type="password" className="input-field" placeholder="Password" name="password" value={password} required/>
        <button className="submit-btn">Log in</button>
      </form>
    </>
  )
}

export default Login