import express from 'express';
import * as announcementBarController from '../controllers/announcementBarController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router
  .route('/active')
  .get(announcementBarController.getActiveAnnouncementBar);

router
  .route('/')
  .get(protect, admin, announcementBarController.getAnnouncementBars)
  .post(protect, admin, announcementBarController.createAnnouncementBar);

router
  .route('/:id')
  .put(protect, admin, announcementBarController.updateAnnouncementBar)
  .delete(protect, admin, announcementBarController.deleteAnnouncementBar);

export default router;
