import express from "express";
import { addproduct } from "../Controllers/ProductController.js";

const productRouters = express.Router();

productRouters.post("/", addproduct)

export default productRouters;

