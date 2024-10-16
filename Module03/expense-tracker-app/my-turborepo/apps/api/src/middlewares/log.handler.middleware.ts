import { Request, Response, NextFunction } from "express";

export class LoggerMiddleware {
  logRequest(req: Request, res: Response, next: NextFunction) {
    console.log(`${req.method} : ${req.url}`);
    next();
  }
}
