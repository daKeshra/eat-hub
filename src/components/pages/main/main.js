import React, { Component } from "react";
import "./main.css";
import { Link, NavLink } from "react-router-dom";

import Three from "../../../assests/image/three.png";
import Four from "../../../assests/image/four.png";
import Five from "../../../assests/image/five.png";
import Image from "../../../assests/image/food_two.png";

//Icons
import { GoLocation } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";
class Main extends Component {
  state = {};
  render() {
    return (
      <main class="main-container">
        <div className="header">
          <div className="header-search">
            <h2 className="nav-heading">Your favorite restaurants,delivered</h2>

            <div className="input-div">
              <input
                className="headerInput-search"
                type="search"
                name="search"
                placeholder="Enter delivery address"
              />

              <Link to="/">
                <FaArrowRight
                  className="header-icon"
                  fontSize={32}
                  style={{ color: "#fff" }}
                />
              </Link>

              <GoLocation
                className="header-icon-loc"
                fontSize={42}
                style={{ color: "#000" }}
              />
            </div>
          </div>
        </div>
        <div className="main-grid">
          <div className="main-img">
            <img className="register-img dash" src={Five} alt="Image three" />
            <h1>Become linkdasher</h1>
            <p className="register-text">
              As linkdelivery driver, you'll make reliabe money-working anytime,
              anywhere
            </p>
            <Link to="/" className="main-link">
              Start earning
            </Link>
          </div>

          <div className="main-img">
            <img
              className="register-img partner"
              src={Three}
              alt="Image three"
            />
            <h1>Become linkPartner</h1>

            <p className="register-text">
              As linkdelivery driver, you'll make reliabe money-working anytime,
              anywhere
            </p>

            <Link to="/" className="main-link">
              Sign up your store
            </Link>
          </div>

          <div className="main-img">
            <img className="register-img app" src={Four} alt="Image three" />
            <h1>Try the app</h1>
            <p class="register-text">
              Get the best DoorDash experience with live order tracking.
            </p>

            <Link to="/" class="main-link">
              Get the app
            </Link>
          </div>
        </div>

        <div className="comfy">
          <div className="find-content">
            <h1>Every Flavour Welcome</h1>
            <span>
              From your neighbourhood sushi spot to the burger and fries you
              crave, choose from over 300,000 local and national favourites
              across the U.S., Canada and Australia.
            </span>
            <Link to="/">Find Restaurants</Link>
          </div>
          <Link to="/">
            <img src={Image} alt="Another Image" />
          </Link>
        </div>

        <div className="comfy2">
          <Link to="/">
            <img src={Image} alt="Another Image" />
          </Link>

          <div className="find-content2">
            <h1>You’ve got stuff to do. We’ve got options.</h1>
            <span>
              Get it delivered right to your door. Or, try Pickup on your way
              home. It’s mealtime on your time.
            </span>
            <Link to="/">Order now</Link>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
