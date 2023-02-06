import React from 'react'

const Login = () => {
  return (
    <div className="login slide-up">
        <div className="center">
          <h2 className="form-title" id="login"><span>or</span>Log in</h2>
          <div className="form-holder">
            <input type="email" className="input" placeholder="Email" />
            <input type="password" className="input" placeholder="Password" />
          </div>
          <button className="submit-btn">Log in</button>
        </div>
      </div>
  )
}

export default Login