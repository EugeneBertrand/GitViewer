# GitHub Viewer 🔍

A simple full-stack web application using **Node.js** and **React** that allows users to search for GitHub profiles and view basic information like avatar, bio, public repositories, and followers.

## 📁 Project Structure

```
github-viewer/
├── client/          # React frontend
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   └── package.json
├── server/          # Node backend
│   ├── index.js
│   └── package.json
```

## 🚀 Features

- Fetch GitHub user data using GitHub REST API
- Display avatar, name, username, bio, repo count, and followers
- Full separation of frontend and backend
- Modern UI with React

## 🛠 Tech Stack

- **Frontend:** React (Create React App)
- **Backend:** Node.js + Express
- **API:** GitHub REST API
- **CORS:** Enabled for cross-origin requests

## 🔧 Setup Instructions

### 1. Clone the repo
```bash
git clone <repo-url>
cd github-viewer
```

### 2. Backend Setup

```bash
cd server
npm install
node index.js
```

> Runs the server on [http://localhost:5000](http://localhost:5000)

### 3. Frontend Setup

```bash
cd client
npm install
npm start
```

> Runs the frontend on [http://localhost:3000](http://localhost:3000)

### 4. Usage

Enter a GitHub username (e.g. `octocat`, `torvalds`) into the search box to fetch and display profile data.

## 🧠 Future Improvements

- Show user repositories
- GitHub OAuth login
- Dark mode toggle
- Search history / recent lookups

## 📄 License

MIT License

---

**Made with ❤️ using Node.js and React**