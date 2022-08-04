import express from "express";
import ipRouter from "./routes/ipRouter.js";



const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => res.send("<h1>This shall be my IP API!</h1>"));
app.use("/api/post", ipRouter)

app.listen(port, () => console.log(`Server running in port ${port}`));