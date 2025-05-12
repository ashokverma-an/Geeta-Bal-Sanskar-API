import express from 'express';
import * as controller from './aesaeps.controller';

const router = express.Router();
router.get('/checking-api', controller.getUsers);
router.get('/bank-details', controller.getBankDetails);
router.post('/check-two-factor', controller.checkTwoFactor);
router.post('/two-factor', controller.twoFactorAuth);
router.post('/cash-withdrawal', controller.cashWithdrawal);
router.post('/balance-enquiry', controller.balanceEnquiry);
router.post('/mini-statement', controller.miniStatement);
router.post('/aadhaar-pay', controller.aadhaarPay);
router.post('/history', controller.listHistory);
router.post('/ekyc/send-otp', controller.ekycSendOtp);
router.post('/ekyc/verify-otp', controller.ekycVerifyOtp);
router.post('/ekyc/resend-otp', controller.ekycResendOtp);
router.post('/ekyc/auth', controller.ekycAuth);
router.get('/ekyc/status/:agentId', controller.ekycStatus);

export default router;