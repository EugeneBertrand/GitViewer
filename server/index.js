const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/github/:username', async (req, res) => {
  const { username } = req.params;
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) throw new Error('GitHub user not found');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});