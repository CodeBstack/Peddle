import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";

import "./aboutPage.styles.css";

const AboutPage = () => {

  // function that handles the contact open and close.
  // and scrolls the about page to top.
  const onHandleContactToggle = () => {
    const contactCont = document.querySelector(".contact-container");
    const overlay = document.querySelector(".overlay");
    const navLinkContainer = document.querySelector(".nav-links-container");
    const nav = document.querySelector(".navigation");

    nav.scrollIntoView({ behavior: "smooth" });
    overlay.classList.remove("hidden");
    contactCont.classList.remove("hidden");
    navLinkContainer.classList.add("hidden-nav");
  };
  

  return (
    <div className=" about-page-container">
      <div className="main-bg"></div>

      <div className="about-page-main">
        <h5>ABOUT US</h5>
        <h1 className="about-page-heading">
          Built for SaaS <br /> and E-commerce
        </h1>
        <p>
          Our tools are easy to use with a user <br />
          friendly dashboard that enables you to set up, <br /> launch, automate
          and manage multi-affliate <br /> campaigns in 5 minutes.
        </p>
      </div>

      <div className="metricks-section">
        <h2>
          Metricks was developed because just like <br /> you, we needed a
          product that could give <br /> us <strong>good value.</strong>
        </h2>
      </div>

      <div className="elaboration-section">
        <div className="left-area">
          <h3>
            <span>01</span> WHY US?
          </h3>
          <p>
            We pride ourselves in our ability to innovate and <br /> create
            world-class tools that provide reliable and <br /> efficient
            touchpants between advertisers and <br /> affliates.
          </p>

          <h5 className="dots">
            ............. <br />
            ............. <br />
            ............. <br /> ............. <br />
            .............
          </h5>
        </div>
        <div className="right-area">
          <h3>
            {" "}
            <span>02</span> GROWING WITH YOU
          </h3>
          <p>
            Leveraging the best technology, we have developed an all-in- <br />
            one affliate marketing tracketing software, a genius tool to help{" "}
            <br /> you track, automate and optimize your influencer campaigns,{" "}
            <br /> all from one dashboard.
          </p>
          <br />
          <p>
            Our team of experts are constantly brainstorming, testing and <br />{" "}
            developing new solutions with only one thing in mind - your <br />{" "}
            business growth. Your success is our success and by giving you{" "}
            <br />
            the tools you need to scale, we grow as well.
          </p>
        </div>
      </div>

      <div className="question-bar">
        <div className="contact-area">
          <h2>Got a Question?</h2>
          <p>
            See how Metricks can help your business grow with best affliate
            marketing tracking <br /> software.
          </p>
          <button onClick={onHandleContactToggle}>Contact Us &rarr;</button>
        </div>
        <div className="img"></div>
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

export default AboutPage;
