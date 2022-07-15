import "./repo-list.styles.css";

const RepoList = ({ data }) => {
  console.log(data);

  const { owner, name, description, stargazers_count, open_issues_count } =
    data;

  return (
    <div className="item">
      <div className="image">
        <img src={owner.avatar_url} alt="user-avatar" />
      </div>

      <div className="text__area">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="acct-activities">
          <p className="stars">Stars: {stargazers_count}</p>
          <p className="issues">Issues: {open_issues_count}</p>
          <p>Submitted 30 days ago by {name}</p>
        </div>
      </div>
    </div>
  );
};

export default RepoList;
