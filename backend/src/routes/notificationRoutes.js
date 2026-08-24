import express from 'express';
import * as notificationController from '../controllers/notificationController.js';

const router = express.Router();

router
  .route('/')
  .get(notificationController.getNotifications);

router
  .route('/:id/read')
  .put(notificationController.markAsRead);

router
  .route('/:id')
  .delete(notificationController.deleteNotification);

export default router;
