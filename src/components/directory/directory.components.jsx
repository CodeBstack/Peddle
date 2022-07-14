import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";

import "./directory.styles.css";

const Directory = () => {
  return (
    <div className="directory-container">
      <div className="main">
        <h1>
          SOMETHING AWESOME IS <br />
          COMING SOON
        </h1>
        <p className="main-text">
          Your all-in-one affliate marketing tracking sofware{" "}
          <strong>track, automate</strong> and <br />
          <strong>optimize</strong> your campaigns
        </p>
        <div className="countdown">
          <div className="countdown-day countdown-element">
            <h2>7</h2>
            <p>Days</p>
          </div>{" "}
          <div className="countdown-hours countdown-element">
            <h2>24</h2>
            <p>Hours</p>
          </div>{" "}
          <div className="countdown-minutes countdown-element">
            <h2>54</h2>
            <p>Minutes</p>
          </div>{" "}
          <div className="countdown-second countdown-element">
            <h2>11</h2>
            <p>Second</p>
          </div>
        </div>
        <form className="form">
          <div className="form-1">
            <input
              className="form-input"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="form-1">
            <input className="form-input" type="text" placeholder="Last Name" />
          </div>
        </form>
        <div className="wait-list">
          <input
            className="email-input"
            type="email"
            placeholder="Enter your email address.."
          />
          <button className="btn">
            <p>JOIN OUR WAITING LIST</p>
          </button>
        </div>
      </div>
      <footer className="footer">
        <div className="socials">
          <img className="social-icons" src={youtube} alt="youtube" />
          <img className="social-icons" src={facebook} alt="facebook" />
          <img className="social-icons" src={linkedin} alt="linkedin" />
          <img className="social-icons" src={instagram} alt="instagram" />
          <img className="social-icons" src={twitter} alt="twitter" />
        </div>
        <div className="policies">
          <p>Terms of services</p>
          <p>Privacy policy</p>
        </div>
        <div className="copyright">
          <p>Copyright 2021 &#64; Peddle Technologies. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Directory;
