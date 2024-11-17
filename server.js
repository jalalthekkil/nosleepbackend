const express = require("express");
const cors = require("cors");

const app = express();

// Middleware to log every request (for debugging purposes)
app.use((req, res, next) => {
  console.log(`${req.method} request received at ${req.url}`);
  next();
});

// Enable CORS for your Firebase frontend only
app.use(
  cors({
    origin: "https://stayawakemate-e252b.web.app", // Firebase app URL
    methods: "GET,POST", // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);

// Middleware to parse JSON bodies in POST requests
app.use(express.json());

// Basic GET route
app.get("/", (req, res) => {
  res.json({ message: "Hey there😎! Your backend is connected." });
});

// Example POST route
app.post("/submit", (req, res) => {
  const { username, message } = req.body;

  if (!username || !message) {
    return res.status(400).json({ error: "Missing username or message" });
  }

  res.status(200).json({
    success: true,
    message: `Received message from ${username}: ${message}`,
  });
});

// Set up the server to listen on a port (either from environment variable or fallback to 5000)
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
