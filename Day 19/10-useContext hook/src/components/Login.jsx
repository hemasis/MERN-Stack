import React from 'react'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')



    const handleSubmit = () => {
        
    }
  return (
    <div>
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Enter your username"
        />
        <input>
        type="text"
        placeholder="Password"
        </input>
    </div>
  )
}

export default Login
