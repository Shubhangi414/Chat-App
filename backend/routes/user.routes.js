import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSideBar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSideBar) //protect route is used for unauthenticated user will not be able to acess the sidebar

export default router;