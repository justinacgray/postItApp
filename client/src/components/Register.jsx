import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = ({regShift, user_Id, setUser_Id}) => {

  const navigate = useNavigate()
  const [confirmReg, setConfirmReg] = useState("")
  const [errors , setErrors] = useState({})

  // using a single sate object to hold all data
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  // withCredentials: true is for cors stuff??, make sure it goes after the object created
  const registerUser = (e) => {
    e.preventDefault()
    axios.post('http://localhost:7000/api/users/register', user, 
    {
      withCredentials: true
    })
    .then((res) => {
      console.log(res.data)
      setUser_Id(res.data.user)
      // resetting
      setUser({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
      })
      setConfirmReg(
        "Thank you for registering, you may now log in"
      )
      setErrors({}) // remember to reset errors state if it was successful
      navigate('/dashboard')
    })
    .catch((err) => {
      console.log('ERROR FROM FRONTEND', err)
      setErrors(err.response.data.errors)
    })
  }

  // using a single function to update the state object
  // we can use the input's name attribute as the key in the object
  const handleInputChange = (e) => {
    setUser( {
      // making a copy of user (spread operator)
      ...user,
      // adding a key based on the e.target.name
      [e.target.name] : e.target.value,
    })
  }

  return (
    <>
      <form id= 'register' style= {{ left :regShift }} className="input-group" onSubmit={registerUser} >
        <div className="form-holder">
          <input type="text" className="input-field" placeholder="Username" name="username" value={user.username} onChange={handleInputChange} />
            {errors.username ? (<span className="error-text"> {errors.username.message} </span>) : null}
          <input type="text" className="input-field" placeholder="First Name" name="firstName" value={user.firstName} onChange={handleInputChange} />
            {errors.firstName ? (<span className="error-text"> {errors.firstName.message} </span>) : null}
          <input type="text" className="input-field" placeholder="Last Name" name="lastName" value={user.lastName} onChange={handleInputChange}  />
            {errors.lastName ? (<span className="error-text"> {errors.lastName.message} </span>) : null}
          <input type="email" className="input-field" placeholder="Email" name='email' value={user.email} onChange={handleInputChange}  />
            {errors.email ? (<span className="error-text"> {errors.email.message} </span>) : null}
          <input type="password" className="input-field" placeholder="Password" name='password' value={user.password} onChange={handleInputChange}  />
            {errors.password ? (<span className="error-text"> {errors.password.message} </span>) : null}
          <input type="password" className="input-field" placeholder="Confirm Password" name='confirmPassword' value={user.confirmPassword} onChange={handleInputChange}  />
            {errors.confirmPassword ? (<span className="error-text"> {errors.confirmPassword.message} </span>) : null}
        </div>
        <button className="submit-btn">Register</button>
      {confirmReg ? <h4 style={{color: "green"}}> {confirmReg} </h4> : null}
      </form>
    </>
  )
}

export default Register