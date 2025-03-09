import express from "express";
const router = express.Router();
import {
  getAllProducts,
  getProductById,
  getProductByName,
  createProduct,
  updateProduct,
  deleteProduct
} from "../controllers/productController.js";

// get all products
router.get("/all", getAllProducts);

// get specific product with id
router.get("/specific", getProductById);

// get product by name
router.get("/search", getProductByName);

// create product
router.post("/create", createProduct);

// update product
router.put("/update", updateProduct);

// delete product
router.delete("/delete", deleteProduct);

export default router;
