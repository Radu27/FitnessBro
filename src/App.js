import logo from './logo.svg';
import Home from "./components/Home"
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import Choose from "./components/Choose/Choose"

function App() {
  return (
    // <div>
    //   <Home />
    // </div>
    <div className="App">
    <header className="App-header">
      {/* <h3 className="h3--textApp">Main Page</h3> */}

      <Router forceRefresh={true} >
        <Switch>
          <Route exact path="/">
            <Home />
            {/* <Link to="/Register">Move to Register</Link> */}
          </Route>
          <Route path="/Login">
            <Login />
            {/* <Link to="/Login">Move to Login</Link> */}
          </Route>
          <Route path="/Register">
            <Register />
            {/* <Link to="/Login">Move to Login</Link> */}
          </Route>
          <Route path="/Login">
            <Login />
            <Link to="/Register">Move to Register</Link>
          </Route>
          <Route path="/Choose">
            <Choose />
            {/* <Link to="/Login">Move to Login</Link> */}
          </Route>
        </Switch>
      </Router>
    </header>
  </div>
  );
}

export default App;
