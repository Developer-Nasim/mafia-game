import React from 'react' 
import './style.css' 
import Logo from '../../img/logo.png'
import LoginBackg from '../../img/auths/background.png'

  
function Login() {
    return (
        <div className="login-area" style={{ backgroundImage: "url("+LoginBackg+")" }}>
            <div className="loginWrp">
                <img src={Logo} alt="" />
                <button type="button">Login</button>
            </div>
        </div>
    )
}


export default Login;