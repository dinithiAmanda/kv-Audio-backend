import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true   
    },

    password: {
        type: String,
        required: true
    },

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    role: {
        type: String,
        required: true,
        default: "customer"
    },

    address: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    }
});

const user = mongoose.model("user", userSchema);

export default user;

