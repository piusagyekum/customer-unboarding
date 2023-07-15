import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

const SignUp = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const submit = e => {
    e.preventDefault()
    const payload = { name, email }
    axios.post("http://localhost:8000/details", payload)
  }

  return (
    <div className="signup">
      <div className="logo"></div>
      <h1>Sign Up</h1>

      <form onSubmit={submit}>
        <label htmlFor="">Username</label>

        <input
          type="text"
          placeholder="Enter your username"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <label htmlFor="">Email</label>

        <input
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input type="submit" value="Sign up" />

        <p>
          Already have an account? <Link to="/">Log In</Link>
        </p>
      </form>
    </div>
  )
}

export default SignUp
