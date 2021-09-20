import express from "express";
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} from "../../controllers/userController.js";
import { protect } from "../../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", authUser);
router.post("/", registerUser);
router.route("/profile").put(protect, updateUserProfile);
router.route("/profile/:id").get(protect, getUserProfile);

export default router;
