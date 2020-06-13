import React from 'react';
import './App.scss';

class Login extends React.Component{
    render(){
        return(
            <div className="container-img container-adjustment">
            <div className="login-sub-div">
              <div className='login'>
                  <div className="text-heading login-title">Ribbon</div>
                  <div className="text-subheading login-sub-title">
                    <div>Login to your</div>
                    <div>Demo Account</div>
                  </div>
                  <div className="input-verify">
                    <div className="text">Email</div>
                    <input type="text" placeholder="Enter your email" name="email" autoComplete="off" fixed="2"/>
                  </div>
                  <div className="input-verify">
                    <div className="text">Password</div>
                    <input type="password" placeholder="Enter password" name="email" autoComplete="off" fixed="2"/>
                  </div>
                  <div className="btn login-btn">
                    <button className="btn login-btn button-size">Sign In</button>
                  </div>
                  <div className="login-footer footer">
                      <p>Forgot password <span className="forgot-password">Retrive it</span></p>
                  </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Login;
