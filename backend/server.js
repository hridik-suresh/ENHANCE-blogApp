import "dotenv/config";
import express from "express";
import connectDB from "./src/config/db.js";
import userRoutes from "./src/routes/userRoutes.js"

const app = express();

const PORT = process.env.PORT || 3000;

connectDB();

//Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Routes
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
