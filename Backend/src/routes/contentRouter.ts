import { Router } from "express";
import { addContent, deleteContent, getContent } from "../controllers/content.controller";
import { authMiddleware } from "../middlewares/authMiddleware";

const contentRouter=Router();


contentRouter.post("/create",authMiddleware as any, addContent)
contentRouter.get("/all",authMiddleware as any, getContent)
contentRouter.delete("/one",authMiddleware as any, deleteContent)

export {contentRouter}