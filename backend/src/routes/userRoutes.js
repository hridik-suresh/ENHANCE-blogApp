import express from "express";
import { register, login } from "../controllers/userController.js";

const router = express.Router();

// User Registration Route
// POST /api/user/register
router.post("/register", register);

// User Login Route
// POST /api/user/login
router.post("/login", login);

export default router;
