import express from 'express';
import * as fontController from '../controllers/fontController.js';
import { uploadImage } from '../middlewares/imageUploadMiddleware.js';

const router = express.Router();

router
  .route('/')
  .get(fontController.getFonts)
  .post(uploadImage.single('font'), fontController.uploadFont);

router
  .route('/:id')
  .delete(fontController.deleteFont);

export default router;
