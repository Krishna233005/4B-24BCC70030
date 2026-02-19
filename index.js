import express from "express";
import cors from "cors";
import cardRoutes from "./routes/card.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Card Collection API 🚀" });
});

app.use("/cards", cardRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
