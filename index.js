import express from "express";
import ipRouter from "./routes/ipRouter.js";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) =>
  res.send(
    "<h1>Welcome to Ipaddressapp Backend</h1> <p>Endpoint: https://ipaddress-app.herokuapp.com/api/ip</p> <p>accepts Post request</p>"
  )
);
app.use("/api", ipRouter);

app.listen(port, () => console.log(`Server running in port ${port}`));
