const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./src/routes/authRoutes");
const dealRoutes = require("./src/routes/dealRoutes");
const claimRoutes = require("./src/routes/claimRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/deals", dealRoutes);
app.use("/api/claims", claimRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/startupperks")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("DB error", err);
  });

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
