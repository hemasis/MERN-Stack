import React from 'react'
import UserContextprovider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <UserContextprovider>
      <h1> Hello cutieees</h1>

      <Login />
      <Profile />

    </UserContextprovider>
  )
}

export default App
