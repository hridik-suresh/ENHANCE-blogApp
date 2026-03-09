import express from "express";
import { register } from "../controllers/userController.js";

const router = express.Router();

// User Registration Route
// POST /api/user/register
router.post("/register", register);

export default router;