import { Request, Response } from 'express';
import { BillAvenuePayload } from './billavenue.types';
import { BillAvenueService } from './billavenue.service';

export const BillAvenueController = {
  billerInfo: async (req: Request, res: Response) => {
    try {
      const payload: BillAvenuePayload = req.body;
      const result = await BillAvenueService.fetchBillerInfo(payload);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: 'Biller Info API failed', detail: err });
    }
  },

  billFetch: async (req: Request, res: Response) => {
    try {
      const payload: BillAvenuePayload = req.body;
      const result = await BillAvenueService.fetchBill(payload);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: 'Bill Fetch API failed', detail: err });
    }
  },

  billPayment: async (req: Request, res: Response) => {
    try {
      const payload: BillAvenuePayload = req.body;
      const result = await BillAvenueService.makeBillPayment(payload);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: 'Bill Payment API failed', detail: err });
    }
  },

  txnStatus: async (req: Request, res: Response) => {
    try {
      const payload: BillAvenuePayload = req.body;
      const result = await BillAvenueService.getTxnStatus(payload);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: 'Transaction Status API failed', detail: err });
    }
  },

  registerComplaint: async (req: Request, res: Response) => {
    try {
      const payload: BillAvenuePayload = req.body;
      const result = await BillAvenueService.registerComplaint(payload);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: 'Complaint Registration API failed', detail: err });
    }
  },

  trackComplaint: async (req: Request, res: Response) => {
    try {
      const payload: BillAvenuePayload = req.body;
      const result = await BillAvenueService.trackComplaint(payload);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: 'Complaint Tracking API failed', detail: err });
    }
  },

  validateBill: async (req: Request, res: Response) => {
    try {
      const payload: BillAvenuePayload = req.body;
      const result = await BillAvenueService.validateBill(payload);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: 'Bill Validation API failed', detail: err });
    }
  },

  pullPlans: async (req: Request, res: Response) => {
    try {
      const payload: BillAvenuePayload = req.body;
      const result = await BillAvenueService.pullPlans(payload);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: 'Plan Pull API failed', detail: err });
    }
  },

  depositEnquiry: async (req: Request, res: Response) => {
    try {
      const payload: BillAvenuePayload = req.body;
      const result = await BillAvenueService.enquireDeposit(payload);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: 'Deposit Enquiry API failed', detail: err });
    }
  }
};
