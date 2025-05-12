import axios from 'axios';
import { Request, Response } from 'express';
import { getHeaders, BASE_URL } from './mobikwik.utils';
import { parseStringPromise } from 'xml2js'

export const balanceCheck = async (req: Request, res: Response) => {
  try {
    const { uid, password, memberId } = req.body;
    const response = await axios.post(`${BASE_URL}/recharge/v1/retailerBalance`, { uid, password, memberId }, { headers: getHeaders() });
    res.json(response.data);
  } catch (err: any) {
    res.status(500).json({ error: 'Balance Check Failed', details: err.message });
  }
};

export const retailerValidation = async (req: Request, res: Response) => {
  try {
    const response = await axios.post(`${BASE_URL}/recharge/v1/retailerValidation`, req.body, { headers: getHeaders() });
    res.json(response.data);
  } catch (err: any) {
    res.status(500).json({ error: 'Retailer Validation Failed', details: err.message });
  }
};

export const viewBill = async (req: Request, res: Response) => {
  try {
    const response = await axios.post(`${BASE_URL}/retailer/v2/retailerViewbill`, req.body, { headers: getHeaders() });
    res.json(response.data);
  } catch (err: any) {
    res.status(500).json({ error: 'View Bill Failed', details: err.message });
  }
};

export const rechargeStatus = async (req: Request, res: Response) => {
  try {
    const { uid, pwd, txId } = req.body;

    const response = await axios.get(`${BASE_URL}/rechargeStatus.do`, {
      params: { uid, pwd, txId },
      responseType: 'text' // make sure axios doesn't auto-parse
    });

    const jsonResult = await parseStringPromise(response.data, { explicitArray: false });

    res.json({
      success: true,
      data: jsonResult,
      statusCode: 200
    });

  } catch (err: any) {
    res.status(500).json({
      success: false,
      error: 'Recharge Status Failed',
      details: err.message
    });
  }
};

export const planFetch = async (req: Request, res: Response) => {
  try {
    const { opId, cirId } = req.body;
    const response = await axios.get(`${BASE_URL}/recharge/v1/rechargePlansAPI/${opId}/${cirId}`,
      { headers: getHeaders() });
    res.json(response.data);
  } catch (err: any) {
    res.status(500).json({ error: 'Plan Fetch Failed', details: err.message });
  }
};

export const planFetchByType = async (req: Request, res: Response) => {
  try {
    const { opId, cirId, type } = req.body;
    const response = await axios.get(`${BASE_URL}/recharge/v1/rechargePlansAPI/${opId}/${cirId}/${type}`,
      { headers: getHeaders() });
    res.json(response.data);
  } catch (err: any) {
    res.status(500).json({ error: 'Plan Fetch by Type Failed', details: err.message });
  }
};

export const rechargePayment = async (req: Request, res: Response) => {
  try {
    const {
      uid,
      pwd,
      cn,
      op,
      cir,
      amt,
      reqid,
      agtcode,
      initchl,
      trmnid,
      geocode,
      pstlcode,
      agtmob
    } = req.body;

    const response = await axios.get(`${BASE_URL}/recharge.do`, {
      params: {
        uid,
        pwd,
        cn,
        op,
        cir,
        amt,
        reqid,
        agtcode,
        initchl,
        trmnid,
        geocode,
        pstlcode,
        agtmob
      },
      responseType: 'text' // prevent axios from trying to auto-parse
    });

    const jsonResult = await parseStringPromise(response.data, { explicitArray: false });

    res.json({
      success: true,
      data: jsonResult,
      statusCode: 200
    });

  } catch (err: any) {
    res.status(500).json({
      success: false,
      error: 'Recharge Payment Failed',
      details: err.message
    });
  }
};

export const ccbpViewBill = async (req: Request, res: Response) => {
  try {
    const response = await axios.post(`${BASE_URL}/retailer/v2/retailerCCBill`, req.body, {
      headers: getHeaders(),
      responseType: 'text'
    });

    const jsonResult = await parseStringPromise(response.data, { explicitArray: false });

    res.json({
      success: true,
      data: jsonResult,
      statusCode: 200
    });
  } catch (err: any) {
    res.status(500).json({ error: 'CCBP View Bill Failed', details: err.message });
  }
};

export const ccbpValidation = async (req: Request, res: Response) => {
  try {
    const response = await axios.post(`${BASE_URL}/recharge/v1/retailerValidation`, req.body, {
      headers: getHeaders(),
      responseType: 'text'
    });

    const jsonResult = await parseStringPromise(response.data, { explicitArray: false });

    res.json({
      success: true,
      data: jsonResult,
      statusCode: 200
    });
  } catch (err: any) {
    res.status(500).json({ error: 'CCBP Validation Failed', details: err.message });
  }
};
export const ccbpRecharge = async (req: Request, res: Response) => {
  try {
    const params = req.body;

    const response = await axios.get(`${BASE_URL}/recharge.do`, {
      params,
      responseType: 'text'
    });

    const jsonResult = await parseStringPromise(response.data, { explicitArray: false });

    res.json({
      success: true,
      data: jsonResult,
      statusCode: 200
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      error: 'CCBP Recharge Failed',
      details: err.message
    });
  }
};