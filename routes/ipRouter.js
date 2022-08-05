import { Router } from "express";
import { ipAdress } from "../controllers/ipController.js";

const ipRouter = Router();

ipRouter.route("/ip").post(ipAdress);

export default ipRouter;