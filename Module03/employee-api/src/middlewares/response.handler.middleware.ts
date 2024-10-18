import { Request, Response, NextFunction } from "express";

interface StatusResponse {
  status: number;
  message?: string;
  data?: any;
}

export class ResponseMiddleware {
  sendResponse({ status, message, data }: StatusResponse) {
    return (req: Request, res: Response, next: NextFunction) => {
      switch (status) {
        case 200:
          res.status(200).send({
            status,
            message: message || "Success",
            data,
          });
          break;
        case 201:
          res.status(201).send({
            status,
            message: message || "Resource created successfully",
            data,
          });
          break;
        case 404:
          res.status(404).send({
            status,
            message: message || "Resource not found",
          });
          break;
        default:
          res.status(status).send({
            status,
            message: message || "An error occured",
          });
      }
      next();
    };
  }
}
