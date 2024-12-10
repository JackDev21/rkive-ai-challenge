import express from "express"
import "dotenv/config"
import { analizePostController } from "../controllers/postsControllers"
import { authMiddleware } from "../middleware/authMiddleware"

export const analyzeRouter = express.Router()

analyzeRouter.get("/posts", authMiddleware, analizePostController)
