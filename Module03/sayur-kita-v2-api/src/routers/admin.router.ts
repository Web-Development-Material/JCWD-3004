import { Router } from "express";
import { AdminController } from "../controllers/admin.controller";

const router = Router();
const adminController = new AdminController();

router.post("/products", adminController.createProduct.bind(adminController));
router.get("/products", adminController.getProducts.bind(adminController));
router.get(
  "/products/:id",
  adminController.getProductById.bind(adminController)
);
router.put(
  "/products/:id",
  adminController.updateProduct.bind(adminController)
);
router.delete(
  "/products/:id",
  adminController.deleteProduct.bind(adminController)
);

router.get(
  "/transactions",
  adminController.getTransactionHistory.bind(adminController)
);
router.post("/discounts", adminController.applyDiscount.bind(adminController));

export default router;
