import React, { useState, useEffect } from "react";
import UserForm from "./UsersForm";
import UserDetails from "./UserDetails";
import RepositoryList from "./RepositoryList";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  const fetchUserDetails = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const userData = await response.json();

      if (response.status === 200) {
        const responseRepos = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        const userRepos = await responseRepos.json();
        userData.repositories = userRepos;
        setUser(userData);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setUser(null);
    }
  };

  const handleUserSubmit = (username) => {
    fetchUserDetails(username);
  };

  const handleReset = () => {
    setUser(null);
  };

  return (
    <div className="container">
      {user ? (
        <UserDetails user={user} onReset={handleReset} />
      ) : (
        <div>
          <UserForm onUserSubmit={handleUserSubmit} />
        </div>
      )}
    </div>
  );
}

export default App;
