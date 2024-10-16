import { Request, Response, NextFunction } from "express";

export class ErrorHandler {
  handleError(err: any, req: Request, res: Response, next: NextFunction) {
    console.error(err);
    res.status(500).send({
      message: "Internal Server Error",
      status: res.statusCode,
      details: err.message || "Something went wrong",
    });
  }
}
