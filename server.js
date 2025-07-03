const express = require("express");
const app = express();
require("dotenv").config(); // must come before using process.env

const PORT = process.env.PORT || 5001; // fallback if PORT not set
// const PORT = process.env.PORT || 3000; // fallback if PORT not set

app.get("/", (req, res) => {
  res.send("🚀 Welcome to the API server!");
});

app.get("/api/test", (req, res) => {
  console.log("✅ /api/test called");
  res.json({ message: "Hello from simple API!" });
});

app.get("/api/greet", (req, res) => {
  const { name = "Guest" } = req.query;
  res.send(`👋 Hello, ${name}!`);
});

// http://localhost:5001/api/greet?name=Manish

// app.listen(PORT, () => {
//   console.log(`🚀 Server running at http://localhost:${PORT}`);
// });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running at http://0.0.0.0:${PORT}`);
});
