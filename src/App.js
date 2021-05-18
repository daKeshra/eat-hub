import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home";
import About from "./components/pages/about/about";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Link,
} from "react-router-dom";

import "./App.css";
import SignIn from "./components/pages/sign in /Signin";

function App() {
  return (
    // <div className="App">
    //   <Navbar />
    //   <Main />
    //   <Footer />
    // </div>
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/About" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
