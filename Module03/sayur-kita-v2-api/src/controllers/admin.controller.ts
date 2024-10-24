import { Request, Response } from "express";
import { AdminService } from "../services/admin.service";

export class AdminController {
  private adminService: AdminService;

  constructor() {
    this.adminService = new AdminService();
  }

  async createProduct(req: Request, res: Response) {
    const product = await this.adminService.createProduct(req.body);
    if (product) {
      res.status(201).send({
        message: "Product created successfully",
        status: res.statusCode,
      });
    } else {
      res.status(400).send({
        message: "Failed to create product",
        status: res.statusCode,
      });
    }
  }

  async getProducts(req: Request, res: Response) {
    const products = await this.adminService.getProducts();
    if (products) {
      res.status(200).send({
        data: products,
        status: res.statusCode,
      });
    } else {
      res.status(404).send({
        message: "Failed to fetch product",
        status: res.statusCode,
        details: res.statusMessage,
      });
    }
  }

  async getProductById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const product = await this.adminService.getProductById(id);
    if (product) {
      res.status(201).send({
        message: `Product ${id} was successfully retrieved`,
        status: res.statusCode,
        data: product,
      });
    } else {
      res.status(400).send({
        message: `Product ${id} could not be retrieved`,
        status: res.statusCode,
        details: res.statusMessage,
      });
    }
  }

  async updateProduct(req: Request, res: Response) {
    const id = Number(req.params.id);
    const updatedProduct = await this.adminService.updateProduct(id, req.body);
    if (updatedProduct) {
      res.status(201).send({
        message: "Update product successfully",
        status: res.statusCode,
        data: updatedProduct,
      });
    } else {
      res.status(400).send({
        message: "Failed to update product",
        status: res.statusCode,
        details: res.statusMessage,
      });
    }
  }

  async deleteProduct(req: Request, res: Response) {
    const id = Number(req.params.id);
    const deletedProduct = await this.adminService.deleteProduct(id);
    if (deletedProduct) {
      res.status(200).send({
        message: "Delete product successfully",
        status: res.statusCode,
        data: deletedProduct,
      });
    } else {
      res.status(400).send({
        message: "Failed to delete product",
        status: res.statusCode,
        details: res.statusMessage,
      });
    }
  }

  async getTransactionHistory(req: Request, res: Response) {
    const transactions = await this.adminService.getTransactionHistory();
    if (transactions) {
      res.status(200).send({
        data: transactions,
        status: res.statusCode,
      });
    } else {
      res.status(400).send({
        message: "Failed to fetch history",
        status: res.statusCode,
        details: res.statusMessage,
      });
    }
  }

  async applyDiscount(req: Request, res: Response) {
    const { product_id, discountPercentage } = req.body;
    const discount = await this.adminService.applyDiscount(
      product_id,
      discountPercentage
    );
    if (discount) {
      res.status(201).send({
        message: "Discount applied successfully",
        status: res.statusCode,
      });
    } else {
      res.status(400).send({
        message: "Failed to create discount for users",
        status: res.statusCode,
        details: res.statusMessage,
      });
    }
  }
}
