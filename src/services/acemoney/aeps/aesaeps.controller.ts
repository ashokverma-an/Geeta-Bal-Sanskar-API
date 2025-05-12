import * as service from './aesaeps.service';
import { Request, Response } from 'express';

export const getUsers = async (req: Request, res: Response) => {
  const result = await service.getBankDetails(req.headers);
  res.status(result.statusCode || 500).json(result);
};
export const getBankDetails = async (req: Request, res: Response) => {
  const result = await service.getBankDetails(req.headers);
  res.status(result.statusCode || 500).json(result);
};

export const checkTwoFactor = async (req: Request, res: Response) => {
  const result = await service.checkTwoFactor(req.body, req.headers);
  res.status(result.statusCode || 500).json(result);
};

export const twoFactorAuth = async (req: Request, res: Response) => {
  const result = await service.twoFactorAuth(req.body, req.headers);
  res.status(result.statusCode || 500).json(result);
};

export const cashWithdrawal = async (req: Request, res: Response) => {
  const result = await service.cashWithdrawal(req.body, req.headers);
  res.status(result.statusCode || 500).json(result);
};

export const balanceEnquiry = async (req: Request, res: Response) => {
  const result = await service.balanceEnquiry(req.body, req.headers);
  res.status(result.statusCode || 500).json(result);
};

export const miniStatement = async (req: Request, res: Response) => {
  const result = await service.miniStatement(req.body, req.headers);
  res.status(result.statusCode || 500).json(result);
};

export const aadhaarPay = async (req: Request, res: Response) => {
  const result = await service.aadhaarPay(req.body, req.headers);
  res.status(result.statusCode || 500).json(result);
};

export const listHistory = async (req: Request, res: Response) => {
  const result = await service.listHistory(req.body, req.headers);
  res.status(result.statusCode || 500).json(result);
};

export const ekycSendOtp = async (req: Request, res: Response) => {
  const result = await service.ekycSendOtp(req.body, req.headers);
  res.status(result.statusCode || 500).json(result);
};

export const ekycVerifyOtp = async (req: Request, res: Response) => {
  const result = await service.ekycVerifyOtp(req.body, req.headers);
  res.status(result.statusCode || 500).json(result);
};

export const ekycResendOtp = async (req: Request, res: Response) => {
  const result = await service.ekycResendOtp(req.body, req.headers);
  res.status(result.statusCode || 500).json(result);
};

export const ekycAuth = async (req: Request, res: Response) => {
  const result = await service.ekycAuth(req.body, req.headers);
  res.status(result.statusCode || 500).json(result);
};

export const ekycStatus = async (req: Request, res: Response) => {
  const result = await service.ekycStatus(req.params.agentId);
  res.status(result.statusCode || 500).json(result);
};
