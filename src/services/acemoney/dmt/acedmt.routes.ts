// acedmt.routes.ts
import express from 'express';
import * as controller from './acedmt.controller';

const router = express.Router();

router.post('/create-customer', controller.createCustomer);
router.post('/verify-customer', controller.verifyCustomer);
router.post('/sender-limit', controller.senderLimit);
router.post('/resend-otp', controller.resendOtpCustomer);
router.post('/get-customer', controller.getCustomer);
router.post('/update-customer-name', controller.updateCustomerName);
router.post('/add-beneficiary', controller.addBeneficiary);
router.get('/beneficiary-list', controller.getBeneficiaryList);
router.post('/verify-beneficiary', controller.verifyBeneficiary);
router.post('/delete-beneficiary', controller.deleteBeneficiary);
router.post('/money-transfer', controller.moneyTransfer);
router.post('/status-check', controller.statusCheck);
router.post('/transfer-history', controller.transferHistory);
router.post('/charges-transfer', controller.getChargesTransfer);

export default router;