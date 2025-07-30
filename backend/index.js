import express from "express";
import cors from "cors";
import dotenv from "dotenv";


import authRoute from "./src/routes/authRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

//routes
app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.send(`Api running everything is good`);
});
app.listen(PORT, ()=> {
  console.log(`server is running on ${PORT}`)
})
