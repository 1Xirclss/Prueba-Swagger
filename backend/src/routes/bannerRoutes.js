import express from 'express';
import * as bannerController from '../controllers/bannerController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router
  .route('/')
  .get(bannerController.getBanners)
  .post(protect, admin, bannerController.createBanner);

router
  .route('/reorder')
  .put(protect, admin, bannerController.reorderBanners);

router
  .route('/:id')
  .put(protect, admin, bannerController.updateBanner)
  .delete(protect, admin, bannerController.deleteBanner);

export default router;
