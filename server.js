const express = require("express");
const cors = require("cors");

const app = express();

// Enable CORS for all routes
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hey there😎!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
