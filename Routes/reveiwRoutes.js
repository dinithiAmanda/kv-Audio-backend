import express from "express";
import { addReview } from "../Controllers/reviewController.js";

const reviewRouter = express.Router();

const reviewRouters = express.Router();

reviewRouter.post("/", addReview)
reviewRouter.get("/", getreviews)
reviewRouter.delete("email", deletereview)


reviewRouter.get("/:approved", (req, res) => {
    
    console.log("This is approved.route")
    
})

reviewRouter.get("/:email", (req,res) => {

     console.log("This is email.route");
});

export default reviewRouter;
