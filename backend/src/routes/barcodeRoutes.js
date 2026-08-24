import express from 'express';
import * as barcodeController from '../controllers/barcodeController.js';

const router = express.Router();

router
  .route('/')
  .post(barcodeController.createBarcode);

export default router;
