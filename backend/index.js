// import express from "express";
// import dotenv from "dotenv";
// import databaseConnection from "./database/database.js";
// import cookieParser from "cookie-parser";
// import userRoute from "./routes/userRoutes.js";
// import cors from "cors";

// // Load environment variables
// dotenv.config({ path: ".env" });

// // Connect to the database
// databaseConnection();

// const app = express();
// const PORT = process.env.PORT || 9080;

// // Middleware
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cookieParser());

// // CORS Configuration
// const corsOptions = {
//     origin: "http://localhost:3000", // No trailing slash
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     credentials: true,
//     allowedHeaders: ["Content-Type", "Authorization"],
// };
// app.use(cors(corsOptions));
// app.options("*", cors(corsOptions)); // ✅ Handle pre-flight requests

// // ✅ Test Route (Fix for "Cannot GET /api/v1")
// app.get("/api/v1", (req, res) => {
//     res.json({ message: "API is working!" });
// });

// // API Routes
// app.use("/api/v1/user", userRoute);

// // Start Server
// app.listen(PORT, () => {
//     console.log(`✅ Server is running on port ${PORT}`);
// });
import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./database/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoutes.js";
import cors from "cors";

// Load environment variables
dotenv.config({ path: ".env" });

// Connect to the database
databaseConnection();

const app = express();
const PORT = process.env.PORT || 9080;

// CORS Configuration
const corsOptions = {
    origin: "http://localhost:3000", // Your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,  // Allow credentials (cookies/auth headers)
    allowedHeaders: ["Content-Type", "Authorization"],
};

// Middleware
app.use(cors(corsOptions));  // ✅ CORS middleware first
app.options("*", cors(corsOptions)); // ✅ Handle pre-flight requests

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Test Route to verify server is working
app.get("/api/v1", (req, res) => {
    res.json({ message: "API is working!" });
});

// API Routes for user
app.use("/api/v1/user", userRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});
