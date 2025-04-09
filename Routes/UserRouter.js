import express from "express";
import { loginUser, registerUser } from "../Controllers/UserController";
import user from "../Models/user";

const userRouter = express.Router();

userRouter.post("/register", registerUser);

userRouter.post("/login", loginUser);

export default userRouter;