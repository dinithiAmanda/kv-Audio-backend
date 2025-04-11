import express from "express";
import { addReview } from "../Controllers/reviewController.js";

const reviewRouter = express.Router();

const reviewRouters = express.Router();

reviewRouters.post("/", addReview)

export default reviewRouters;
