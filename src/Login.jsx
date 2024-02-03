import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./App.css"
import background from '../img/login_bg.svg'

function Login(props){
    
    const [username, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [userError, setUserError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const navigate = useNavigate()

    const onButtonClick = () => {

    }

    return(
        <div className="loginPage" style={{backgroundImage: `url(${background})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover'
        }}>
            <h1>Login</h1>
            <br/>
            <div>
                <div className="inputContainer">
                    <input
                        value = {username}
                        placeholder="Enter your username"
                        onChange={ev => setUser(ev.target.value)}
                        className = {"inputBox"}
                    />
                    <label className="error">{userError}</label>
                </div>
                <br/>
                <div className="inputContainer">
                    <input
                        value={password}
                        placeholder="Enter your password"
                        onChange={ev => setPassword(ev.target.value)}
                        className="inputBox"
                    />
                </div>

                <br/>
                <div>
                    <input
                        className="inputButton"
                        type = "button"
                        onClick = {onButtonClick}
                        value={"Log in"}
                    />
                </div>
            </div>
        </div>

    )


}

export default Login