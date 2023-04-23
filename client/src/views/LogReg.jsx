import React, {useRef, useState, useEffect} from 'react'
import Login from '../components/Login'
import Register from '../components/Register'
// import '../scss/LogReg.scss'
import '../css/LogReg.css'


const LogReg = (props) => {

  const {user_Id, setUser_Id} = props
  const [toggle, settoggle] = useState(false)
  const [visiable, setvisiable] = useState("")

  const [ regShift, setRegShift ] = useState("")
  const [ logShift, setLogShift ] = useState("")
  const [ btnShift, setBtnShift ] = useState("")


  const regToggle = (e) => {
    setRegShift("50px")
    setLogShift("450px")
    setBtnShift("0px")
  }
  
  const loginToggle = (e) => {
    setRegShift("-400px")
    setLogShift("50px")
    setBtnShift("110px")
  }
  // console.log(regShift, logShift, btnShift)

  return (
    <div className="hero">
      <div className="form-box">
        <div className="button-box">
          <div id="btn" style= {{ left : btnShift }}></div>
          <button type='button'  className='toggle-btn' onClick={regToggle}>Register</button>
          <button type='button' className='toggle-btn' onClick={loginToggle}>Login</button>
        </div>
          <Register regShift={regShift} user_Id={user_Id} setUser_Id ={setUser_Id} />
          <Login logShift={logShift} user_Id={user_Id} setUser_Id ={setUser_Id} />
        </div>
    </div>
  )
}

export default LogReg