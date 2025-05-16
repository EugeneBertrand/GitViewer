import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const getUserData = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/github/${username}`);
      const data = await res.json();
      setUserData(data);
    } catch (err) {
      alert('User not found');
    }
  };

  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>GitHub User Viewer</h1>
      <input
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={getUserData}>Search</button>

      {userData && (
        <div style={{ marginTop: 20 }}>
          <img src={userData.avatar_url} alt="avatar" width={100} />
          <h2>{userData.name} ({userData.login})</h2>
          <p>{userData.bio}</p>
          <p>Repos: {userData.public_repos} | Followers: {userData.followers}</p>
          <a href={userData.html_url} target="_blank" rel="noreferrer">View Profile</a>
        </div>
      )}
    </div>
  );
}

export default App;