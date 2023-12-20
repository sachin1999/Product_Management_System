import express from 'express';
import { createProductControllers, deleteProductController, getProductController, getSingleProductController, productPhotoController, updateProductControllers } from '../controllers/productControllers.js';
import formidable from 'express-formidable';
const router = express.Router();

router.post("/create-product", formidable(),createProductControllers);
router.post("/update-product/:pid", formidable(),updateProductControllers);
router.get("/get-product", getProductController)
router.get("/get-product/:id",getSingleProductController)
router.get("/product-photo/:pid",productPhotoController)
router.delete("/product/:pid", deleteProductController)
export default router;