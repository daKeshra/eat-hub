import React, { Component } from "react";
import Navbar from "./Navbar/navbar";
import Main from "./pages/main/main";
import Footer from "./Footer/footer";

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <Main />
        <Footer />
      </>
    );
  }
}

export default Home;
