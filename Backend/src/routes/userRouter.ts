import {Router} from "express"
import { signin, signup, test } from "../controllers/user.controller";

const userRouter=Router()

userRouter.get("/test" ,test);
userRouter.post("/signup",signup)
userRouter.post("/signin",signin)
export {userRouter}