import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

interface CustomRequest extends Request {
  userId?: string; 
}

export const authMiddleware = (req: CustomRequest,res: Response,next: NextFunction) => {
  try {
    
    const token = req.headers["authorization"]?.split(" ")[1];

    if (!token) {
      return res.status(403).json({
        error: "Token not found or invalid",
      });
    }

    
    const decodedUser = jwt.verify(
      token,
      process.env.JWT_SECRETKEY as string
    ) as { userId: string };

    if (!decodedUser || !decodedUser.userId) {
      return res.status(403).json({
        error: "Invalid token",
      });
    }

   
    req.userId = decodedUser.userId;

    
    next();
  } catch (error:any) {
    res.status(500).json({
      error: `Authentication error: ${error.message}`,
    });
  }
};
