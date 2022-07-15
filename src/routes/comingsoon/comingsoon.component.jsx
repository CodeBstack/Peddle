import { Outlet } from "react-router-dom";
import Contact from "../../components/contact/contact.component";
import Directory from "../../components/directory/directory.components";

const Home = () => {
  return (
    <div className="good">
      <Outlet />
      <Contact />
      <Directory />
    </div>
  );
};

export default Home;
