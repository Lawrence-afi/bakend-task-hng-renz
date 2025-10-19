import express from "express";
import axios from "axios";
import cors from "cors";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
const server = express();
dotenv.config();

let port = process.env.SITE_PORT || 3000;
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

server.use(cors());
server.use(limiter);

server.get("/", (req, res) => {
  res.send("Welcome to the API. Use the /me endpoint to get user info and a cat fact.");
}
);

server.get("/me", async (req, res) => {
  try {
    console.log("Hello World");
    let randomCatFact = await axios.get("https://catfact.ninja/fact");

    console.log(randomCatFact.data.fact);

    res.status(200).json({
      status: "success",
      user: {
        email: "lawrenceikara@gmail.com",
        name: "Lawrence Ikara Okon ",
        stack: "Node.js/Express",
      },
      timestamp: new Date().toISOString(),
      fact: "" + randomCatFact.data.fact,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "An error occurred while fetching the cat fact.",
    });
  }
});

server.listen(port, () => {
  console.log("Server is running on port 3000");
});
