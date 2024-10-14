import { Request, Response } from "express";

export interface Connection {
  req: Request;
  res: Response;
}
