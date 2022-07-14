import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import "./navigation.styles.css";

const Navigation = () => {
  const btn = document.getElementById("menu-btn");
  const nav = document.getElementById("menu");

  // btn.addEventListener("click", () => {
  //   btn.classList.toggle("open");
  //   nav.classList.toggle("flex");
  //   nav.classList.toggle("hidden");
  // });

  const onHandleToggle = () => {
    const contactCont = document.querySelector(".contact-container");
    const overlay = document.querySelector(".overlay");

    overlay.classList.remove('hidden')
    contactCont.classList.remove("hidden");
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          Logo
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/about">
            About Us
          </Link>

          <Link className="nav-link" to="/blog   ">
            Blog
          </Link>

          <button onClick={onHandleToggle} className="btn nav-link">
            <p>Contact Us</p>
          </button>
          <div className="overlay"></div>
          {/* <button id="menu-btn" class="hamburger">
            <span class="hamburger-top"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
          </button> */}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
