import express from 'express';
import * as settingsController from '../controllers/settingsController.js';

const router = express.Router();

router
  .route('/:key')
  .get(settingsController.getSetting)
  .put(settingsController.updateSetting);

export default router;
