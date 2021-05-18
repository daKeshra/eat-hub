import React, { Component } from "react";
import { GrFacebook, GrInstagram, GrTwitter } from "react-icons/gr";
import { Link, NavLink } from "react-router-dom";
import XearthLogo from "../../assests/image/nav-logo.png";
import "./footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer>
        <div className="footer-container">
          <div className="header-city">
            <h2 className="heading h-city">Top cities</h2>
            <h2 className="heading h-cuisines">Top Cuisines Near You</h2>
          </div>
          <div className="footer-content">
            <div className="footer-cities">
              <div className="column one">
                <Link className="footer-link" to="/">
                  New York City
                </Link>

                <Link className="footer-link" to="/">
                  Los Angeles
                </Link>

                <Link className="footer-link" to="/">
                  Toronto
                </Link>

                <Link className="footer-link" to="/">
                  Chicago
                </Link>

                <Link className="footer-link" to="/">
                  Houston
                </Link>

                <Link className="footer-link" to="/">
                  Brooklyn
                </Link>

                <Link className="footer-link" to="/">
                  San Diego
                </Link>

                <Link className="footer-link" to="/">
                  Las Vegas
                </Link>
              </div>

              <div className="column two">
                <Link className="footer-link" to="/">
                  San Franscisco
                </Link>

                <Link className="footer-link" to="/">
                  Seatle
                </Link>
                <Link className="footer-link" to="/">
                  Atlanta
                </Link>

                <Link className="footer-link" to="/">
                  Queens
                </Link>

                <Link className="footer-link" to="/">
                  Vancouver, BC
                </Link>

                <Link className="footer-link" to="/">
                  Miami
                </Link>

                <Link className="footer-link" to="/">
                  San Antonio
                </Link>

                <Link className="footer-link" to="/">
                  Phoneix
                </Link>
              </div>

              <div className="column three">
                <Link className="footer-link" to="/">
                  Denver
                </Link>

                <Link className="footer-link" to="/">
                  Austin
                </Link>

                <Link className="footer-link" to="/">
                  Washington, DC
                </Link>

                <Link className="footer-link" to="/">
                  Dallas
                </Link>

                <Link className="footer-link" to="/">
                  Melbourne
                </Link>

                <Link className="footer-link" to="/">
                  Sydney
                </Link>

                <Link className="footer-link" to="/">
                  Montreal
                </Link>

                <Link className="footer-link" to="/">
                  All cities
                </Link>
              </div>
            </div>

            <div className="footer-cuisines">
              <div className="column four">
                <Link className="footer-link" to="/">
                  Pizza Near Me
                </Link>

                <Link className="footer-link" to="/">
                  Chinese Food Near Me
                </Link>

                <Link className="footer-link" to="/">
                  Sushi Near Me
                </Link>

                <Link className="footer-link" to="/">
                  Cafe Near Me
                </Link>

                <Link className="footer-link" to="/">
                  Mexican Food Near Me
                </Link>

                <Link className="footer-link" to="/">
                  Thai Food Near Me
                </Link>

                <Link className="footer-link" to="/">
                  Lunch Near Me
                </Link>

                <Link className="footer-link" to="/">
                  Seafood Near Me
                </Link>
              </div>

              <div className="column five">
                <Link className="footer-link" to="/">
                  Indian Food Near Me
                </Link>

                <Link className="footer-link" to="/">
                  Dessert Near Me
                </Link>

                <Link className="footer-link" to="/">
                  Burgers Near Me
                </Link>

                <Link className="footer-link" to="/">
                  Asian Food Near Me
                </Link>

                <Link className="footer-link" to="/">
                  Italian Food Near Me
                </Link>

                <Link className="footer-link" to="/">
                  Vegan Food Near Me
                </Link>

                <Link className="footer-link" to="/">
                  Sandwiches Near Me
                </Link>

                <Link className="footer-link" to="/">
                  Restaurants Near Me
                </Link>
              </div>
            </div>
          </div>

          <div className="about-column">
            <div className="footer-about">
              <div className="about-link">
                <h2 className="link-header">
                  <Link className="footer-link " to="/">
                    Get to Know Us
                  </Link>
                </h2>
                <Link className="footer-link" to="/">
                  About us
                </Link>
                <Link className="footer-link" to="/">
                  Careers
                </Link>
                <Link className="footer-link" to="/">
                  Invenstors
                </Link>
                <Link className="footer-link" to="/">
                  Blog
                </Link>
                <Link className="footer-link" to="/">
                  Engineering Blog
                </Link>
                <Link className="footer-link" to="/">
                  Gift Cards
                </Link>
                <Link className="footer-link" to="/">
                  DoorDash Stories
                </Link>
                <Link className="footer-link" to="/">
                  LinkedIn
                </Link>
                <Link className="footer-link" to="/">
                  Glassdoor
                </Link>
                <Link className="footer-link" to="/">
                  Accessbility
                </Link>
              </div>
            </div>

            <div className="footer-help">
              <div className="help-link">
                <h2 className="link-header">
                  <Link className="footer-link" to="/">
                    Let Us Help You
                  </Link>
                </h2>
                <Link className="footer-link" to="/">
                  Account Detials
                </Link>
                <Link className="footer-link" to="/">
                  Order History
                </Link>
                <Link className="footer-link" to="/">
                  Help
                </Link>
              </div>
            </div>

            <div className="footer-business">
              <div className="business-link">
                <h2 className="link-header">
                  <Link className="footer-link" to="/">
                    Doing Business
                  </Link>
                </h2>
                <Link className="footer-link" to="/">
                  Become a Dasher
                </Link>
                <Link className="footer-link" to="/">
                  Be a Partner Restaurant
                </Link>
                <Link className="footer-link" to="/">
                  Get Dashers for Deliveries
                </Link>
                <Link className="footer-link" to="/">
                  Get DoorDash for Work
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-terms">
          <div className="footer-terms">
            <Link className="footer-link term" to="/">
              Terms of Service
            </Link>
            <Link className="footer-link term" to="/">
              Privacy
            </Link>
            <Link className="footer-link term" to="/">
              Notice At Collection
            </Link>
            <Link className="footer-link term" to="/">
              Do not Sell My Personal Information(California)
            </Link>
            <Link className="footer-link term" to="/">
              Delivery Locations
            </Link>

            <div className="social-icons">
              <Link to="/">
                <GrFacebook className="fa facebook" />
              </Link>
              <Link to="/">
                <GrTwitter className="fa twitter" />
              </Link>

              <Link to="/">
                <GrInstagram className="fa instagram" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
