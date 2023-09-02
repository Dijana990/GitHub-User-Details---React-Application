import React from "react";
import PropTypes from "prop-types";
import "./App.css";

function UserDetails({ user, onReset }) {
  return (
    <div>
      <div className="mb-3">
        <img src={user.avatar_url} alt={user.login} width="150" />
        <h2>{user.name}</h2>

        <p>
          <b>LOCATION:</b> {user.location}
        </p>
        <p>
          <b>BIO:</b> {user.bio}
        </p>
      </div>
      <h3>REPOSITORIES:</h3>
      <ul>
        {user.repositories.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
      <button className="btn btn-secondary" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}

UserDetails.propTypes = {
  user: PropTypes.object.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default UserDetails;
