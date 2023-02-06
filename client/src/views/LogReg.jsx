import React from 'react'
import Login from '../components/Login'
import Register from '../components/Register'
import '../scss/LogReg.scss'

const LogReg = () => {

  // const toggleToReg = (e) => {
  
  // }

  // const toggleToLogin = (e) => {
    
  // }
  return (
    <div className="form-container">
    <Login />
    <Register />
    </div>
  )
}

export default LogReg