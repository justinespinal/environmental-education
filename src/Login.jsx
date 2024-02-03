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
        setUserError("")
        setPasswordError("")

        if(""===username){
            setUserError("Username cannot be empty")
            return
        }

        if(username.length<8){
            setUserError("Invalid username")
            return
        }

        if(""===password){
            setPasswordError("Password cannot be empty")
            return
        }

        if(password.length<8){
            setPasswordError("Password must be at least 8 characters")
            return
        }

        handleLogin()
    }

    const handleLogin = () => {
        let userData
        try{
            userData = JSON.parse(localStorage.getItem(username));
        }catch(e){
            console.error("Error parsing JSON", e)
        }

        if(userData && userData.password === password){
            setLoggedIn(true)
            setUser(username)
            navigate("/")
        }else if(!userData){
            if(window.confirm("User does not exist. Would you like to create a new account?")){
                const newUser = {
                    username,
                    password,
                    highScore: 0 // Starting high score
                };
                localStorage.setItem(username, JSON.stringify(newUser))
                setLoggedIn(true)
                setUser(username)
                navigate("/")
            }
        }else{
            alert("Password is incorrect")
        }
    }

    return(
        <div className="loginPage" style={{backgroundImage: `url(${background})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover'
        }}>
            <br/>
            <div className="loginHolder">
                <h1>Login</h1>
                <br/>
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