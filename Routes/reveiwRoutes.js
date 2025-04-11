import express from "express";
import { addReview } from "../Controllers/reviewController.js";

const reviewRouter = express.Router();

const reviewRouters = express.Router();

reviewRouter.post("/", addReview)
reviewRouter.get("/", getreviews)

export default reviewRouter;
