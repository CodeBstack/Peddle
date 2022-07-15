import { useEffect } from "react";

import { Outlet } from "react-router-dom";
import Contact from "../../components/contact/contact.component";
import GithubPage from "../../components/github/githubPage.components";

const Github = () => {
  useEffect(() => {
    fetch(
      "https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc"
    )
      .then((response) => response.json())
      .then((users) => console.log(users));
  }, []);

  return (
    <div>
      <Outlet />
      <Contact />
      <GithubPage />
    </div>
  );
};

export default Github;
