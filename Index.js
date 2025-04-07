import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRoutes from "./Routes/user-routes.js";
import productRoutes from "./Routes/product-routes.js";

const app = express();

app.use(bodyParser.json());

let mongourl = "mongodb+srv://admin:123@cluster0.vfgpw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongourl)

const conection = mongoose.connection;

conection.on("open", () => {
    console.log("MongoDB connection established successfuly");
});