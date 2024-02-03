import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import './App.css'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUser] = useState("")

  return (
    <div className="Main_App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home username={username} logIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setUser={setUser}/>}/>
        </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App
