import express from 'express';
import * as cartController from '../controllers/cartController.js';

const router = express.Router();

router
  .route('/')
  .get(cartController.getCart);

router
  .route('/add')
  .post(cartController.addToCart);

router
  .route('/update/:itemId')
  .put(cartController.updateCartItem);

router
  .route('/remove/:itemId')
  .delete(cartController.removeFromCart);

router
  .route('/clear')
  .delete(cartController.clearCart);

export default router;
