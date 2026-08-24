import express from 'express';
import * as closureDateController from '../controllers/closureDateController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router
  .route('/')
  .get(closureDateController.getClosureDates)
  .post(protect, closureDateController.addClosureDate);

router
  .route('/:id')
  .patch(protect, closureDateController.updateClosureDate)
  .delete(protect, closureDateController.deleteClosureDate);

export default router;
