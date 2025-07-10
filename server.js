const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// dotenv config
dotenv.config();

// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

// default route
app.get("/", (req, res) => {
  res.send("API is running...");
});


const PORT = process.env.PORT;


app.listen(PORT, () => {
  console.log(`✅ Server running on PORT ${PORT}`);
});
