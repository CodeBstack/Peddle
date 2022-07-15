import { useEffect, useState } from "react";
import RepoList from "../repo-list/repo-list.components";

import "./githubPage.styles.css";

const GithubPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc"
    )
      .then((response) => response.json())
      .then((users) => setData(users.items));
  }, []);

  return (
    <div className="github-container">
      {data.map((eachData) => {
       return <RepoList key={eachData.id} data={eachData} />;
      })}
    </div>
  );
};

export default GithubPage;
