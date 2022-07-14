import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import "./navigation.styles.css";

const Navigation = () => {
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

          <p className="nav-link contact">Contact Us</p>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
