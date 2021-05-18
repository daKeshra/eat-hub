import React, { Component } from "react";
import Image from "../../../assests/image/bgImage.jpeg";
import FourImg from "../../../assests/image/four.png";

import Navbar from "../../Navbar/navbar";
import Footer from "../../Footer/footer";
import "./about.css";
class About extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <div className="about-container">
          <h1 className="about-header">We are here</h1>
          <div className="about-content">
            <div className="content-one">
              <img src={Image} alt="Image" />

              <div className="content-one-text">
                <h2>What we do</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur?"
                </p>
              </div>
            </div>

            <div className="absolute-center">
              <h2>More from us</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?"
              </p>
            </div>

            <div className="content-one ">
              <div className="content-one-text">
                <h2>About Dashers</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur?"
                </p>
              </div>
              <img src={Image} alt="Image" />
            </div>

            <div className="last-line">
              <h4>Customer's Choice,Our priority</h4>
              <img src={FourImg} alt="Image" />
            </div>
          </div>
          <hr />
          <div className="form-container">
            <div className="contact-form">
              <form className="form">
                <div className="form-input">
                  <h2>Message us</h2>

                  <input type="text" name="name" placeholder=" Your Name" />

                  <input type="email" name="email" placeholder=" Your email" />

                  <textarea name="comment">Your message...</textarea>
                  <input
                    className="aboutform-button"
                    type="submit"
                    name="submit"
                    value="Send"
                  />
                </div>
              </form>
            </div>

            <div className="ads">
              <p>ads if any</p>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default About;
