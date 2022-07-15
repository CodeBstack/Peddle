import Contact from "../../components/contact/contact.component";
import { Outlet } from "react-router-dom";

import AboutPage from "../../components/aboutPage/aboutPage.components";

const About = () => {
  return (
    <div>
      <Outlet />
      <Contact />
      <AboutPage />
    </div>
  );
};

export default About;
