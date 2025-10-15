import mongoose from "mongoose";
import dotenv from "dotenv";

// Load the .env file
dotenv.config({
    
});

console.log("Mongo URI:", process.env.MONGO_URI); // Should print the MongoDB URI from .env

const databaseConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("MongoDB connected successfully");
    }).catch((error) => {
        console.log("Connection error:", error);
    });
};

export default databaseConnection;

