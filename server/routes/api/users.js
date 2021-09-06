import express from "express";
import {
  authUser,
  getUserProfile,
  registerUser,
} from "../../controllers/userController.js";
const router = express.Router();

router.post("/login", authUser);
router.route("/profile").get(getUserProfile);
router.post("/", registerUser);

export default router;
