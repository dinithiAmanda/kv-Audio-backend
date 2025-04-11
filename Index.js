import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRoutes from "./Routes/user-routes.js";
import productRoutes from "./Routes/product-routes.js";
import jwt from "jsonwebtoken";
import reviewRoutes from "./Routes/reveiwRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    let token = req.header
        ("Authorization")
    
    if (token != null) {
        token = token.replace("Bearer ", "");

        console.log(token);
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (!err) {
                req.user = decoded;
            }
        });
    }
    next()
});

let mongourl = process.env.mongo_url;

mongoose.connect(mongourl)

const conection = mongoose.connection;

conection.prependOnceListener
conection.once("open", () => {
    console.log("MongoDB connection established successfuly")
});

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/reviews", reviewRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

