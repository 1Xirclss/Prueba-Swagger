import express from 'express';
import * as userController from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

// POST /api/users/wishlist - Toggle wishlist item
router.post('/wishlist', protect, userController.toggleWishlist);

// GET /api/users/wishlist - Get wishlist
router.get('/wishlist', protect, userController.getWishlist);

// GET /api/users/profile - Get current user profile
router.get('/profile', protect, userController.getProfile);
router.put('/profile', protect, userController.updateProfile);

export default router;

