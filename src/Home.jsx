import React from "react"
import {useNavigate} from "react-router-dom"

const Home = (props) => {
    const {username, logIn} = props
    const Navigate = useNavigate()

    const onButtonClick = () => {
        if(logIn){

        }else{
            Navigate("/login")
        }
    } 

    return(
        <>
            <div>
                <h1>Welcome!</h1>
                <div className="buttonContainer">
                    <input
                        className="inputB"
                        type = "button"
                        onClick={onButtonClick}
                        value = {logIn ? "Log out" : "Log in"}
                    />
                    {(logIn ? <div>
                        You are logged in!
                        </div> : <div/>)}
                </div>
            </div>
        
        </>
    )
}

export default Home;