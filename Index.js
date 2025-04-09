import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRoutes from "./Routes/user-routes.js";
import productRoutes from "./Routes/product-routes.js";

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    let token = req.header
        ("Authorization")
    
    if (token != null) {
        token = token.replace("Bearer ", "");

        console.log(token);
        jwt.verify(token, "kv-secret-51", (err, decoded) => {
            if (!err) {
                req.user = decoded;
            }
        });
    }
    next()
});

let mongourl = "mongodb+srv://admin:123@cluster0.vfgpw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongourl)

const conection = mongoose.connection;

conection.prependOnceListener
conection.once("open", () => {
    console.log("MongoDB connection established successfuly")
});

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
