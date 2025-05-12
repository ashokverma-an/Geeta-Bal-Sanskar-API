import { Request, Response } from "express";
import * as DmtService from "./dmt.service";

const handleResponse = async (res: Response, serviceFn: () => Promise<any>) => {
  try {
    const result = await serviceFn();
    res.status(200).json(result);
  } catch (error: any) {
    console.error("Error:", error?.response?.data || error.message);
    res.status(error?.response?.status || 500).json({
      success: false,
      message: error?.response?.data?.message || error.message || "Internal Server Error"
    });
  }
};

export const processCustomerEKYC = async (req: Request, res: Response) => {
  await handleResponse(res, () => DmtService.processCustomerEKYC(req.body));
};

export const sendCustomerOtp = async (req: Request, res: Response) => {
  await handleResponse(res, () => DmtService.sendCustomerOtp(req.body));
};

export const createCustomer = async (req: Request, res: Response) => {
  await handleResponse(res, () => DmtService.createCustomer(req.body));
};

export const generateTxnOtp = async (req: Request, res: Response) => {
  await handleResponse(res, () => DmtService.generateTxnOtp(req.body));
};

export const fundTransfer = async (req: Request, res: Response) => {
  await handleResponse(res, () => DmtService.fundTransfer(req.body));
};

export const getCustomer = async (req: Request, res: Response) => {
  await handleResponse(res, () => DmtService.getCustomer(req.body));
};

export const addBeneficiary = async (req: Request, res: Response) => {
  await handleResponse(res, () => DmtService.addBeneficiary(req.body));
};

export const verifyBeneficiary = async (req: Request, res: Response) => {
  await handleResponse(res, () => DmtService.verifyBeneficiary(req.body));
};

export const checkTxnStatus = async (req: Request, res: Response) => {
  await handleResponse(res, () => DmtService.checkTxnStatus(req.body));
};

export const getBeneficiaryList = async (req: Request, res: Response) => {
  await handleResponse(res, () => DmtService.getBeneficiaryList(req.query));
};