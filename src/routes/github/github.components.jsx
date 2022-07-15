import { Outlet } from "react-router-dom";
import Contact from "../../components/contact/contact.component";

const Github = () => {
  return (
    <div>
      <Outlet />
      <Contact />
      Github page
    </div>
  );
};

export default Github;
