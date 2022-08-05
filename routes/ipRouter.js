import { Router } from "express";
import { ipAdress } from "../controllers/ipController.js";

const ipRouter = Router();

ipRouter.route("/ip").get(ipAdress);

export default ipRouter;