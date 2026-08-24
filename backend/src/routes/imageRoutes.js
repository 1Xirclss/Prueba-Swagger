import express from 'express';
import * as imageController from '../controllers/imageController.js';
import { uploadImage } from '../middlewares/imageUploadMiddleware.js';

const router = express.Router();

router
  .route('/upload')
  .post(uploadImage.single('image'), imageController.uploadProductImage);

router
  .route('/delete-by-url')
  .post(imageController.deleteImageByUrl);

router
  .route('/upload-announcement')
  .post(uploadImage.single('image'), imageController.uploadAnnouncementImage);

router
  .route('/announcement-gallery')
  .get(imageController.getAnnouncementImages);

router
  .route('/announcement/:id')
  .delete(imageController.deleteAnnouncementImage);

router
  .route('/upload-logo')
  .post(uploadImage.single('image'), imageController.uploadBrandLogo);

router
  .route('/:publicId')
  .delete(imageController.deleteProductImage);

export default router;
