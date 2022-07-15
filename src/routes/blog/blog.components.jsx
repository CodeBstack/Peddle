import Contact from "../../components/contact/contact.component";
import { Outlet } from "react-router-dom";
const Blog = () => {
  return (
    <div>
      <Outlet />
      <Contact />
      <div style={{ color: "white", textAlign: "center", fontSize: "2rem" }}>
        {" "}
        Blog page
      </div>
    </div>
  );
};

export default Blog;
