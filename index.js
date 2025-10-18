import express from "express";
import axios from "axios";
import cors from "cors";
import rateLimit from "express-rate-limit";
const server = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

server.use(cors());
server.use(limiter);

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

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
