import { Router } from 'express';
import { BillAvenueController } from './billavenue.controller';

const router = Router();

router.post('/biller-info', BillAvenueController.billerInfo);
router.post('/bill-fetch', BillAvenueController.billFetch);
router.post('/bill-payment', BillAvenueController.billPayment);
router.post('/txn-status', BillAvenueController.txnStatus);
router.post('/complaint-register', BillAvenueController.registerComplaint);
router.post('/complaint-track', BillAvenueController.trackComplaint);
router.post('/bill-validate', BillAvenueController.validateBill);
router.post('/plan-pull', BillAvenueController.pullPlans);
router.post('/deposit-enquiry', BillAvenueController.depositEnquiry);

export default router;
