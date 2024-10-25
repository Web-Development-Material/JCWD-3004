import { Router } from "express";
import { AdminController } from "../controllers/admin.controller";
import { AuthenticateJwtMiddleware } from "../middlewares/auth.middleware";

const router = Router();
const adminController = new AdminController();
const authenticateJwt = new AuthenticateJwtMiddleware();

router.post(
  "/products",
  authenticateJwt.authenticateJwt.bind(authenticateJwt),
  authenticateJwt.authorizeRole("admin").bind(authenticateJwt),
  adminController.createProduct.bind(adminController)
);
router.get(
  "/products",
  authenticateJwt.authenticateJwt.bind(authenticateJwt),
  authenticateJwt.authorizeRole("admin").bind(authenticateJwt),
  adminController.getProducts.bind(adminController)
);
router.get(
  "/products/:id",
  authenticateJwt.authenticateJwt.bind(authenticateJwt),
  authenticateJwt.authorizeRole("admin").bind(authenticateJwt),
  adminController.getProductById.bind(adminController)
);
router.put(
  "/products/:id",
  authenticateJwt.authenticateJwt.bind(authenticateJwt),
  authenticateJwt.authorizeRole("admin").bind(authenticateJwt),
  adminController.updateProduct.bind(adminController)
);
router.delete(
  "/products/:id",
  authenticateJwt.authenticateJwt.bind(authenticateJwt),
  authenticateJwt.authorizeRole("admin").bind(authenticateJwt),
  adminController.deleteProduct.bind(adminController)
);

router.get(
  "/transactions",
  authenticateJwt.authenticateJwt.bind(authenticateJwt),
  authenticateJwt.authorizeRole("admin").bind(authenticateJwt),
  adminController.getTransactionHistory.bind(adminController)
);
router.post(
  "/discounts",
  authenticateJwt.authenticateJwt.bind(authenticateJwt),
  authenticateJwt.authorizeRole("admin").bind(authenticateJwt),
  adminController.applyDiscount.bind(adminController)
);

export default router;
