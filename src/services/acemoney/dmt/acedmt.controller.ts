import * as service from './acedmt.service';
import { Request, Response } from 'express';

export const createCustomer = async (req: Request, res: Response) => {
  const result = await service.createCustomer(req.body);
  res.status(result.statusCode || 500).json(result);
};

export const verifyCustomer = async (req: Request, res: Response) => {
  const result = await service.verifyCustomer(req.body);
  res.status(result.statusCode || 500).json(result);
};

export const senderLimit = async (req: Request, res: Response) => {
  const result = await service.senderLimit(req.body);
  res.status(result.statusCode || 500).json(result);
};

export const resendOtpCustomer = async (req: Request, res: Response) => {
  const result = await service.resendOtpCustomer(req.body);
  res.status(result.statusCode || 500).json(result);
};

export const getCustomer = async (req: Request, res: Response) => {
  const result = await service.getCustomer(req.body);
  res.status(result.statusCode || 500).json(result);
};

export const updateCustomerName = async (req: Request, res: Response) => {
  const result = await service.updateCustomerName(req.body);
  res.status(result.statusCode || 500).json(result);
};

export const addBeneficiary = async (req: Request, res: Response) => {
  const result = await service.addBeneficiary(req.body);
  res.status(result.statusCode || 500).json(result);
};

export const getBeneficiaryList = async (req: Request, res: Response) => {
  const result = await service.getBeneficiaryList(req.body);
  res.status(result.statusCode || 500).json(result);
};

export const verifyBeneficiary = async (req: Request, res: Response) => {
  const result = await service.verifyBeneficiary(req.body);
  res.status(result.statusCode || 500).json(result);
};

export const deleteBeneficiary = async (req: Request, res: Response) => {
  const result = await service.deleteBeneficiary(req.body);
  res.status(result.statusCode || 500).json(result);
};

export const moneyTransfer = async (req: Request, res: Response) => {
  const result = await service.moneyTransfer(req.body);
  res.status(result.statusCode || 500).json(result);
};

export const statusCheck = async (req: Request, res: Response) => {
  const result = await service.statusCheck(req.body);
  res.status(result.statusCode || 500).json(result);
};

export const transferHistory = async (req: Request, res: Response) => {
  const result = await service.transferHistory(req.body);
  res.status(result.statusCode || 500).json(result);
};

export const getChargesTransfer = async (req: Request, res: Response) => {
  const result = await service.getChargesTransfer(req.body);
  res.status(result.statusCode || 500).json(result);
};
