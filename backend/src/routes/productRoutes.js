import express from 'express';
import * as productController from '../controllers/productController.js';

const router = express.Router();

router
  .route('/')
  .get(productController.getProducts)
  .post(productController.createProduct);

router
  .route('/allProducts')
  .get(productController.getAllProducts);

router
  .route('/barcode/:barcode')
  .put(productController.updateProductByBarcode)
  .delete(productController.deleteProductByBarcode);

router
  .route('/:productId/variant-stock')
  .put(productController.updateVariantStock);

router
  .route('/:id')
  .get(productController.getProductById)
  .put(productController.updateProduct)
  .delete(productController.deleteProduct);

export default router;
