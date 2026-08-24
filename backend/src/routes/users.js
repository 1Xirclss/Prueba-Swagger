import express from 'express';
import * as userController from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router
  .route('/wishlist')
  .get(protect, userController.getWishlist)
  .post(protect, userController.toggleWishlist);

router
  .route('/profile')
  .get(protect, userController.getProfile)
  .put(protect, userController.updateProfile);

export default router;
