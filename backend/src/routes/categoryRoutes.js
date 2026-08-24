import express from 'express';
import {
    createCategory,
    getCategories,
    deleteCategory,
    getCategoryById,
    updateCategory
} from '../controllers/categoryController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/')
    .post(protect, createCategory)
    .get(getCategories);

router.route('/:id')
    .delete(protect, deleteCategory)
    .get(getCategoryById)
    .put(protect, updateCategory);



export default router;
