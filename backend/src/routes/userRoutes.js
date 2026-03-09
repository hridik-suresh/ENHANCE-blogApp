import express from "express";
import { register, login, logout } from "../controllers/userController.js";

const router = express.Router();

// User Registration Route
// POST /api/user/register
router.post("/register", register);

// User Login Route
// POST /api/user/login
router.post("/login", login);

// User Logout Route
// GET /api/user/logout
router.get("/logout", logout);

export default router;
