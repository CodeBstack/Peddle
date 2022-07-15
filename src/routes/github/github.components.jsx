import { Outlet } from "react-router-dom";
import Contact from "../../components/contact/contact.component";
import GithubPage from "../../components/github/githubPage.components";

const Github = () => {
  return (
    <div>
      <Outlet />
      <Contact />
      <GithubPage />
    </div>
  );
};

export default Github;
