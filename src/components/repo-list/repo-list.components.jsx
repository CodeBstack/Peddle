import "./repo-list.styles.css";

const RepoList = ({ data }) => {
  // console.log(data);

  // Destructuring the data mapped data.
  const { owner, name, description, stargazers_count, open_issues_count } =
    data;

  // Function converts all numbers in thousands.
  const formatK = (num) => {
    return Math.abs(num) >= 1000
      ? (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.abs(num);
  };

  return (
    <div className="item">
      <div className="image">
        <img src={owner.avatar_url} alt="user-avatar" />
      </div>

      <div className="text__area">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="acct-activities">
          <p className="stars">Stars: {formatK(stargazers_count)}</p>
          <p className="issues">Issues: {formatK(open_issues_count)}</p>
          <p>Submitted 30 days ago by {name}</p>
        </div>
      </div>
    </div>
  );
};

export default RepoList;
