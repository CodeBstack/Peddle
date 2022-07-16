import { useEffect, useState } from "react";
import RepoList from "../repo-list/repo-list.components";

import "./githubPage.styles.css";

const GithubPage = () => {
  // useState hook method to set initial and changed state of the API data.
  const [data, setData] = useState([]);
  
  // useEffect hook method to handle side effects.
  useEffect(() => {
    fetch(
      "https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc"
    )
      .then((response) => response.json())
      .then((users) => setData(users.items));
  }, []);

  // Maps through the array of data and calls the RepoList.
  return (
    <div className="github-container">
      {data.map((eachData) => {
       return <RepoList key={eachData.id} data={eachData} />;
      })}
    </div>
  );
};

export default GithubPage;
