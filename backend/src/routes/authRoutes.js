import express from 'express';
import * as authController from '../controllers/authController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router
  .route('/register/request-code')
  .post(authController.requestRegistrationCode);

router
  .route('/register/verify')
  .post(authController.verifyCodeAndRegister);

router
  .route('/login')
  .post(authController.login);

router
  .route('/password-reset/request')
  .post(authController.requestPasswordReset);

router
  .route('/password-reset/verify')
  .post(authController.verifyCodeAndResetPassword);

router
  .route('/me')
  .get(protect, authController.getCurrentUser);

export default router;
