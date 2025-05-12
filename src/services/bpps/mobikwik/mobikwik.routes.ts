import express from 'express';
import * as controller from './mobikwik.controller';

const router = express.Router();

router.post('/balance-check', controller.balanceCheck); 
//MGRATED AND TESTED
router.post('/retailer-validation', controller.retailerValidation);

router.post('/view-bill', controller.viewBill);

router.post('/recharge-status', controller.rechargeStatus);
//MGRATED AND TESTED
router.post('/plan-fetch', controller.planFetch);
//MGRATED AND TESTED
router.post('/plan-fetch-by-type', controller.planFetchByType);
//MGRATED AND TESTED
router.post('/recharge', controller.rechargePayment);
//MGRATED AND TESTED
router.post('/ccbp/view-bill', controller.ccbpViewBill);
//MGRATED AND TESTED
router.post('/ccbp/validation', controller.ccbpValidation);
//MGRATED AND TESTED
router.post('/ccbp/recharge', controller.ccbpRecharge);
//MGRATED AND TESTED

export default router;