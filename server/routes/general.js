import express from "express";
import {getUser} from "../controllers/generalController";

const router = express.Router();

router("/user/:id",getUser);


export default router;