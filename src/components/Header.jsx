import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Component.module.css";

const Header = () => {
    const handleMenuOpen = () =>{
            const nav = document.querySelector('#primary-navigation')
            const navToggle = document.querySelector('.mobile-nav-toggle')
        const visibility = nav.getAttribute("data-visible")
        if(visibility==='false'){
            nav.setAttribute("data-visible","true")
            navToggle.setAttribute("aria-expanded","true")
        }
        else{
            nav.setAttribute("data-visible","false")
            navToggle.setAttribute("aria-expanded","false")
        }
    }

  return (
    <div className="primary-header flex">
      <div>
        <img className="logo" src="../../src/assets/shared/logo.svg" alt="" />
      </div>
      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        onClick={handleMenuOpen}
        aria-expanded={false}
      >
        <span className="sr-only">Menu</span>
      </button>
      <nav>
        <ul
          id="primary-navigation"
          className={`primaryNavigation flex underline-indicators`}
          data-visible={false}
        >
          <li className="active">
            <Link
              className="ff-sans-cond text-accent uppercase letter-spacing-2"
              to="/"
            >
              <span aria-hidden="true">00</span>Home
            </Link>
          </li>
          <li>
            <Link
              className="ff-sans-cond text-accent uppercase letter-spacing-2"
              to="/destination"
            >
              <span aria-hidden="true">01</span>Destination
            </Link>
          </li>
          <li>
            <Link
              className="ff-sans-cond text-accent uppercase letter-spacing-2"
              to="/crew"
            >
              <span aria-hidden="true">02</span>Crew
            </Link>
          </li>
          <li>
            <Link
              className="ff-sans-cond text-accent uppercase letter-spacing-2"
              to="/technology"
            >
              <span aria-hidden="true">03</span>Technology
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
