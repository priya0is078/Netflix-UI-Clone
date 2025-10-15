// import express from "express";
// import { Login, Logout, Register } from "../controllers/user.js";

// const router = express.Router();


// router.route("/register").post(Register);
// router.route("/login").post(Login);
// router.route("/logout").get(Logout);

// export default router;


// routes/userRoutes.js
import express from "express";
import { Login, Logout, Register } from "../controllers/user.js";

const router = express.Router();

// Route for user registration
router.post("/register", Register);

// Route for user login
router.post("/login", Login);

// Route for user logout
router.get("/logout", Logout);

export default router;



