import React, { Component } from "react";
import { Link } from "react-router-dom";
import Xearth from "../../../assests/image/nav-logo.png";
import "./SignIn.css";

class SignIn extends Component {
  state = {};
  render() {
    return (
      <>
        <header className="signin-header">
          <Link to="/">
            <img src={Xearth} alt="Company logo" />
          </Link>
        </header>
        <div className="signin-container">
          <main className="form-main">
            <div className="form-container">
              <h1>Register </h1>
              <form className="form">
                <div className="form-details">
                  <input
                    type="text"
                    name="text"
                    placeholder="Restaurant name"
                  />
                  <input
                    type="text"
                    name="text"
                    placeholder="Restaurant Address"
                  />

                  <input type="text" name="text" placeholder="Phonenumber" />
                  <input type="email" name="email" placeholder="Emai" />
                  <input
                    className="btn-submit"
                    type="submit"
                    name="submit"
                    value="Save"
                  />
                </div>
              </form>
            </div>
          </main>
        </div>
        {/* <Footer /> */}
      </>
    );
  }
}

export default SignIn;
