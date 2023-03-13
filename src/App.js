import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from "./components/screens/Home"
import Signin from "./components/screens/Signin"
import Signup from "./components/screens/Signup"
import Profile from "./components/screens/Profile"

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Home}/>
      <Route path="/signin" component={Signin}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/profile" component={Profile}/>
    </Router>
  );
}

export default App;