import axios from "axios"
import { useRef, useState } from "react"
import { useHistory } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()
  const [invCred, setInvCred] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    const payload = { email, password }

    axios
      .post("http://192.168.100.2/api/User/Login", payload)
      .then(response => {
        if (response.data.message === "Success") {
          console.log(response)
          setInvCred(false)

          localStorage.setItem("token", response.data.responseData.token)

          history.push("/getusers")
        }
      })
      .catch(error => {
        setInvCred(true)
        console.log(error)
      })
  }

  return (
    <div className="login">
      <div className="logo"></div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        {invCred === true ? (
          <label className="errMessage">Invalid Credentials</label>
        ) : (
          ""
        )}

        <label htmlFor="">Email</label>

        <input
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={e => {
            setEmail(e.target.value)
            setInvCred(false)
          }}
        />

        <label>Password</label>

        <input
          type="password"
          placeholder="Enter your password"
          required
          value={password}
          onChange={e => {
            setPassword(e.target.value)
            setInvCred(false)
          }}
        />

        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login
