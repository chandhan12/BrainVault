import Router from "express"
import { authMiddleware } from "../middlewares/authMiddleware";
import { createLink, getContent } from "../controllers/shareLink.controller";


const ShareLinkRouter=Router();


ShareLinkRouter.post("/share",authMiddleware as any ,createLink)
ShareLinkRouter.get("/:shareLink",getContent)

export { ShareLinkRouter}