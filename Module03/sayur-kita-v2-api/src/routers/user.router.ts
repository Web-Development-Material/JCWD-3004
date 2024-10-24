import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const router = Router();
const userController = new UserController();

router.post("/purchase", userController.purchaseProduct.bind(userController));
router.get(
  "/history/:user_id",
  userController.getTransactionsHistory.bind(userController)
);
router.get("/products", userController.getProducts.bind(userController));
router.get(
  "/products/detail/:product_id",
  userController.getProductById.bind(userController)
);

export default router;
