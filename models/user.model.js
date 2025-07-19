import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    _id: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
}, {
    timestamps: true,
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);