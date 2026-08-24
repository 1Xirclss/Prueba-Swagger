import express from 'express';
import * as excelController from '../controllers/excelController.js';
import { uploadExcel } from '../middlewares/uploadMiddleware.js';

const router = express.Router();

router
  .route('/export')
  .get(excelController.exportProducts);

router
  .route('/file')
  .get(excelController.getExcelFile);

router
  .route('/import')
  .post(uploadExcel.single('file'), excelController.importProducts);

export default router;
