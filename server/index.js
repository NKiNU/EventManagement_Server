const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bookingRoutes = require('./routes/bookingRoutes');


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', bookingRoutes);


const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/asiaquest');
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB Connection Failed:", err);
    process.exit(1); // Exit process with failure
  }
};

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});