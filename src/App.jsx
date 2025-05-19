import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setError(null);
    setUserData(null);

    if (!username) return;

    try {
      const res = await fetch(`/api/github/${username}`);
      const data = await res.json();

      if (data.error) {
        setError(data.error);
        return;
      }

      setUserData(data);
    } catch (err) {
      setError('Something went wrong.');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #1f2937, #4b5563)',
      color: 'white',
      padding: '2rem',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        background: '#111827',
        borderRadius: '1rem',
        padding: '2rem',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
      }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>🔍 GitHub Profile Viewer</h1>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            style={{
              flexGrow: 1,
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              border: 'none',
              fontSize: '1rem'
            }}
          />
          <button onClick={fetchData} style={{
            background: '#3b82f6',
            color: 'white',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            Search
          </button>
        </div>

        {error && <p style={{ color: '#f87171', textAlign: 'center' }}>{error}</p>}

        {userData && (
          <div style={{
            textAlign: 'center',
            borderTop: '1px solid #374151',
            paddingTop: '1.5rem'
          }}>
            <img
              src={userData.avatar_url}
              alt="avatar"
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                marginBottom: '1rem',
                border: '3px solid #3b82f6'
              }}
            />
            <h2 style={{ fontSize: '1.5rem' }}>{userData.name} <span style={{ fontSize: '1rem', color: '#9ca3af' }}>@{userData.login}</span></h2>
            <p style={{ margin: '0.5rem 0', color: '#d1d5db' }}>{userData.bio}</p>
            <p style={{ margin: '0.5rem 0' }}>📦 {userData.public_repos} Repos | 👥 {userData.followers} Followers</p>
            <a href={userData.html_url} target="_blank" rel="noreferrer"
              style={{ color: '#60a5fa', textDecoration: 'underline' }}>
              View Full Profile →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

