import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Login = ({logShift}) => {
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

  const [ loginUser , setLoginUser] = useState({
    email: "",
    password: ""
  })
  const [errorMessage, setErrorMessage] = useState("")

  const navigate = useNavigate()
  const { username } = useParams()

  const userLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:7000/api/users/login', {
        loginUser
    },
      {
        // helps sets cookies values
        withCredentials: true,

      }
    )
      .then((res) => {
        // console.log("RESPONSE ==>", res)
        // todo - fix login-  not working
        navigate('/dashboard')

      })
      .catch((err) => {
        console.log("ERROR ===>", err)
        setErrorMessage(err.response.data.message)
      })
  }

  // if can't type it's because e is not passed into function as a parameter
  // event needs to captured upon key stroke
  const handleInputChange = (e) => {
    console.log("loginUSer ==> ", loginUser)
    setLoginUser({
      ...loginUser, 
      [e.target.name] : e.target.value,
    })
    
  }

  return (
    <>
      <p className='error-text'> {errorMessage ? errorMessage : null} </p>
      <form onSubmit={userLogin} className="input-group" id='login' style= {{left: logShift}}>
        <input type="email" className="input-field" placeholder="Email" name="email" value={loginUser.email} onChange={handleInputChange} required />
        <input type="password" className="input-field" placeholder="Password" name="password" value={loginUser.password} onChange={handleInputChange} required/>
        <button className="submit-btn">Log in</button>
      </form>
    </>
  )
}

export default Login