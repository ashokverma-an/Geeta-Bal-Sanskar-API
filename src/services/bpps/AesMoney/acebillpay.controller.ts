import * as service from './acebillpay.service';
import { Request, Response } from 'express';

export const autoAccessToken = async (req: Request, res: Response) => {
  const result = await service.autoAccessToken(req.body, req.headers);
  res.status(result.statusCode || 500).json(result);
};

export const checkBill = async (req: Request, res: Response) => {
  const result = await service.checkBill(req.body, req.headers);
  res.status(result.statusCode || 500).json(result);
};

export const payBill = async (req: Request, res: Response) => {
  const result = await service.payBill(req.body, req.headers);
  res.status(result.statusCode || 500).json(result);
};

export const getBillDetails = async (req: Request, res: Response) => {
  const result = await service.getBillDetails(req.body, req.headers);
  res.status(result.statusCode || 500).json(result);
};

export const validateBill = async (req: Request, res: Response) => {
  const result = await service.validateBill(req.body, req.headers);
  res.status(result.statusCode || 500).json(result);
};

export const payBillStatus = async (req: Request, res: Response) => {
  const result = await service.payBillStatus(req.body, req.headers);
  res.status(result.statusCode || 500).json(result);
};

export const getBillerList = async (req: Request, res: Response) => {
  const result = await service.getBillerList(req.body, req.headers);
  res.status(result.statusCode || 500).json(result);
};

export const getPaymentHistory = async (req: Request, res: Response) => {
  const result = await service.getPaymentHistory(req.body, req.headers);
  res.status(result.statusCode || 500).json(result);
};

export const reversePayment = async (req: Request, res: Response) => {
  const result = await service.reversePayment(req.body, req.headers);
  res.status(result.statusCode || 500).json(result);
};

export const cancelPayment = async (req: Request, res: Response) => {
  const result = await service.cancelPayment(req.body, req.headers);
  res.status(result.statusCode || 500).json(result);
};
