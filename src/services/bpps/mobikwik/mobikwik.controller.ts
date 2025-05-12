
import * as service from './mobikwik.service';
import { Request, Response } from 'express';

export const balanceCheck = (req: Request, res: Response) => service.balanceCheck(req, res);
export const retailerValidation = (req: Request, res: Response) => service.retailerValidation(req, res);
export const viewBill = (req: Request, res: Response) => service.viewBill(req, res);
export const rechargeStatus = (req: Request, res: Response) => service.rechargeStatus(req, res);
export const planFetch = (req: Request, res: Response) => service.planFetch(req, res);
export const planFetchByType = (req: Request, res: Response) => service.planFetchByType(req, res);
export const rechargePayment = (req: Request, res: Response) => service.rechargePayment(req, res);
export const ccbpViewBill = (req: Request, res: Response) => service.ccbpViewBill(req, res);
export const ccbpValidation = (req: Request, res: Response) => service.ccbpValidation(req, res);
export const ccbpRecharge = (req: Request, res: Response) => service.ccbpRecharge(req, res);