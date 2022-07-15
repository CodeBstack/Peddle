import Contact from "../../components/contact/contact.component";
import { Outlet } from "react-router-dom";
const Blog = () => {
  return (
    <div>
      <Outlet />
      <Contact />
      Blog page
    </div>
  );
};

export default Blog;
