import React, { useState } from "react";
import PropTypes from "prop-types";
import "./App.css";

function UserForm({ onUserSubmit }) {
  const [username, setUsername] = useState("");

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUserSubmit(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <p className="username">GitHub username:</p>
        <input
          type="text"
          className="form-control"
          placeholder="e.g. facebook"
          value={username}
          onChange={handleInputChange}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="submit">
            GO!
          </button>
        </div>
      </div>
    </form>
  );
}

UserForm.propTypes = {
  onUserSubmit: PropTypes.func.isRequired,
};

export default UserForm;
