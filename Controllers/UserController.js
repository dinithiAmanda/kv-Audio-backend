import user from "../Models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export function registerUser(req, res) {
    const data = req.body;

    data.password = bcrypt.hashSync(data.password, 10);

    const newuser = new user(data);

    newuser.save()
        .then(() => {
            res.json({ messege: "User registered successfuly" });
        })
        .catch((err) => {
            res.status(500).json({ error: "User registration failed" });
        });
                
} 

export function loginUser(req, res) {
    const data = req.body;

    user.findOne({ email: data.email })
        .then((user) => {

            if (user == null) {
                res.status(404).json({ error: "User not found" });
            } else {
                const isPasswordCorrect = bcrypt.compareSync(data.password, user.password);

                if (isPasswordCorrect) {
                    const token = jwt.sign({
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        role: user.role,
                    }, process.env.JWT_SECRET);

                    res.json({ message: "Login successful"});
                    
                } else {
                    res.status(401).json({ error: "login failed" });
                }
            }
        });
}