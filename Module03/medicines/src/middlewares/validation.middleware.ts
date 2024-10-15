import { Request, Response, NextFunction } from "express";

export function validateMedicine(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const { name, description, price, type } = req.body;
  if (!name || !description || !price || !type) {
    res.status(400).send({
      message: "Please provide all required fields",
      status: res.statusCode,
    });
    return;
  }
  next();
}
