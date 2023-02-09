import React, {useRef, useEffect} from 'react'
import Login from '../components/Login'
import Register from '../components/Register'
// import '../scss/LogReg.scss'
import '../css/LogReg.css'


const LogReg = () => {
  const ref = useRef(null); // ref => { current: null }

  useEffect(() => {
    // The DOM element is accessible here.
    console.log(ref.current);
  }, []);

  const toggleToReg = (e) => {

  }

  const toggleToLogin = (e) => {

  }

  return (
    <div className="hero">
      <div className="form-box">
        <div className="button-box">
          <div id="btn"></div>
          <button type='button' className='toggle-btn' onClick={toggleToReg}>Login</button>
          <button type='button' className='toggle-btn' onClick={toggleToLogin}>Register</button>
        </div>
        <Login />
        <Register />
      </div>
    </div>
  )
}

export default LogReg