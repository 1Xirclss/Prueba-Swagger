import express from 'express';
import * as storeHoursController from '../controllers/storeHoursController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router
  .route('/')
  .get(storeHoursController.getAllStoreHours);

router
  .route('/bulk')
  .put(protect, admin, storeHoursController.bulkUpdateStoreHours);

router
  .route('/:day')
  .put(protect, admin, storeHoursController.updateStoreHours);

export default router;
