## ✅ Learn the Basics of Node.js & Express

# This is created for dummy node api for testing

# 1. What is Node.js?

- A runtime environment that lets you run JS outside the browser (e.g., on a server).

- Based on Chrome’s V8 engine.

# 2. What is Express?

- A lightweight Node.js framework for building APIs and web servers.

# Essential Concepts to Learn

| Topic                 | Why It's Important                        |
| --------------------- | ----------------------------------------- |
| `http.createServer()` | Understand how raw Node server works      |
| Express basics        | Create routes, middleware, error handling |
| `req`, `res` objects  | Handle incoming data and send response    |
| Middleware            | Reusable logic between request & response |
| CORS                  | So frontend can talk to backend           |
| Environment variables | Secure configuration                      |
| `nodemon`             | Auto-reload server on changes             |

## 📦 Step-by-step to set up

# 1. Create folder

mkdir my-api-server && cd my-api-server

# 2. Init project

npm init -y

# 3. Install dependencies

npm install express dotenv cors cookie-parser

| Package         | Purpose                                       |
| --------------- | --------------------------------------------- |
| `express`       | Core web server framework                     |
| `dotenv`        | Load environment variables from a `.env` file |
| `cors`          | Allow cross-origin requests                   |
| `cookie-parser` | Parse cookies from client requests            |

# 4. Install dev tool

npm install --save-dev nodemon

## 🛠 Folder Structure

my-api-server/
├── server.js
├── package.json
├── routes/
│ └── api.js
├── controllers/
│ └── apiController.js
├── middlewares/
│ └── logger.js
├── .env
├── .gitignore

# 5. Create server.js

# 6. Project clean and run

- rm -rf node_modules package-lock.json
- npm install
