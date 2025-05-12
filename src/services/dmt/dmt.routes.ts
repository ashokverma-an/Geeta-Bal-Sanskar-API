import { Router } from "express";
import * as DmtController from "./dmt.controller";

const router = Router();

router.post("/processCustomerEKYC", DmtController.processCustomerEKYC);
router.post("/customer-otp", DmtController.sendCustomerOtp);
router.post("/create-customer", DmtController.createCustomer);
router.post("/generateTxnOtp", DmtController.generateTxnOtp);
router.post("/transaction", DmtController.fundTransfer);
router.post("/get-customer", DmtController.getCustomer);
router.post("/AddBeneficiar", DmtController.addBeneficiary);
router.post("/verifyBeneficiary", DmtController.verifyBeneficiary);
router.post("/checkTxnStatus", DmtController.checkTxnStatus);
router.get("/getBeneficiers", DmtController.getBeneficiaryList);

export default router;