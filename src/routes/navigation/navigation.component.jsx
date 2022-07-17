import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../../assets/metricks-logo.png";

import "./navigation.styles.css";

const Navigation = () => {
  // Handles contact open and close.
  const onHandleContactToggle = () => {
    const contactCont = document.querySelector(".contact-container");
    const overlay = document.querySelector(".overlay");

    overlay.classList.remove("hidden");
    contactCont.classList.remove("hidden");

    onHandleCloseNavOnLinkClick();
  };

  // This runs whenever any of the links are clicked to close the nav conatainer.
  const onHandleCloseNavOnLinkClick = () => {
    const navLinkContainer = document.querySelector(".nav-links-container");

    if (!navLinkContainer.classList.contains("hidden-nav")) {
      navLinkContainer.classList.toggle("hidden-nav");
      document.querySelector(".hamburger").classList.toggle("open");
    }
  };

  // Handles closing and opening of the nav container on smaller screens.
  const onHandleNavToggle = () => {
    document.querySelector(".hamburger").classList.toggle("open");

    const navLinkContainer = document.querySelector(".nav-links-container");
    navLinkContainer.classList.toggle("hidden-nav");
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link
          onClick={onHandleCloseNavOnLinkClick}
          className="logo-container"
          to="/"
        >
          <img src={logo} alt="logo" />
        </Link>
        <div className="nav-links-container hidden-nav">
          <Link
            onClick={onHandleCloseNavOnLinkClick}
            className="nav-link"
            to="/about"
          >
            About Us
          </Link>
          <Link
            onClick={onHandleCloseNavOnLinkClick}
            className="nav-link"
            to="/github"
          >
            Github
          </Link>

          <Link
            onClick={onHandleCloseNavOnLinkClick}
            className="nav-link"
            to="/blog   "
          >
            Blog
          </Link>

          <button onClick={onHandleContactToggle} className="btn nav-link">
            <p>Contact Us</p>
          </button>

          <div className="overlay hidden"></div>
        </div>

        {/* Hamburger button */}
        <button onClick={onHandleNavToggle} className="hamburger">
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
