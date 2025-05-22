import React from 'react';
import '../CSS/login.css'; // Make sure to create this CSS file or update the path

function Login() {
  return (

    <div className="main">

    <div className="wrapper">
      <div className="form-box">
        <h2>Login</h2>
        <form action="#">
          <div className="input-box name">
            <input type="text" required />
            <label>Username</label>
            <div className="person">
              <ion-icon name="person"></ion-icon>
            </div>
          </div>

          <div className="input-box pa">
            <input type="password" required />
            <label>Password</label>
            <div className="lock">
              <ion-icon name="lock-closed"></ion-icon>
            </div>
          </div>

          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>

          <button className="btn" type="submit">LOGIN</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Login;
