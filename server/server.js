const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);


// Connect to MongoDB
mongoose.connect("mongodb+srv://haleemmuhsin71_db_user:Haleem%402003@portfoliocluster.p4xlmzb.mongodb.net/?appName=PortfolioCluster")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Backend is running...");
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
