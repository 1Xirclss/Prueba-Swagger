import express from 'express';
import * as geocodingController from '../controllers/geocodingController.js';

const router = express.Router();

router
  .route('/nominatim')
  .get(geocodingController.reverseGeocode);

export default router;
