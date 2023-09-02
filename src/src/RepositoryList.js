import React from "react";
import PropTypes from "prop-types";
import "./App.css";

function RepositoryList({ repositories }) {
  return (
    <div>
      <h3>REPOSITORIES:</h3>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
}

RepositoryList.propTypes = {
  repositories: PropTypes.array.isRequired,
};

export default RepositoryList;
