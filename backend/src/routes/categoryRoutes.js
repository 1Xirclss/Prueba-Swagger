import express from 'express';
import * as categoryController from '../controllers/categoryController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router
  .route('/')
  .get(categoryController.getCategories)
  .post(protect, categoryController.createCategory);

router
  .route('/:id')
  .get(categoryController.getCategoryById)
  .put(protect, categoryController.updateCategory)
  .delete(protect, categoryController.deleteCategory);

export default router;
