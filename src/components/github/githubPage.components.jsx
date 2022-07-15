import "./githubPage.styles.css";

const GithubPage = () => {
  return (
    <div className="github-container">
      <div className="item">
        <div className="image">
          <img
            src="https://avatars.githubusercontent.com/u/16789300?v=4"
            alt="user-avatar"
          />
        </div>

        <div className="text__area">
          <h2>Tensorflow</h2>
          <p>
            An Opne source machine learning framework for everyone
            https://tensorflow.org
          </p>
          <div className="acct-activities">
            <p className="stars">Stars: 118k</p>
            <p className="issues">Issues: 1.6k</p>
            <p>Submitted 30 days ago by tensorflow</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubPage;
