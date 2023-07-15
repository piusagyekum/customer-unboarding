import Login from "./login"
import SignUp from "./signup"
import GetUsers from "./getUsers"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/getusers">
            <GetUsers />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
