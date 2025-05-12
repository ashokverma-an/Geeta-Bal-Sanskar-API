import axios from 'axios';
import { handleApiError } from './aesaeps.utils';
import * as T from './aesaeps.types';

const BASE_URL = process.env.BASE_URL || '';

const HEADERS = (h: any) => ({
  Authorization: h.authorization || '',
  'X-Root-id': h['x-root-id'] || h['X-Root-id'],
  clientId: h.clientid || h.clientId,
  ClientSecret: h.clientsecret || h.ClientSecret,
  distributorCode: h.distributorcode || h.distributorCode,
});

export const getBankDetails = async (headers: any): Promise<T.ApiResponse> => {
  try {
    const res = await axios.get(`${BASE_URL}/AEPS/bankDetails`, { headers: HEADERS(headers) });
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};

export const checkTwoFactor = async (body: any, headers: any): Promise<T.ApiResponse> => {
  try {
    const res = await axios.post(`${BASE_URL}/AEPS/checktwoFactorAuth`, body, { headers: HEADERS(headers) });
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};

export const twoFactorAuth = async (body: any, headers: any): Promise<T.ApiResponse> => {
  try {
    const res = await axios.post(`${BASE_URL}/AEPS/twoFactorAuth`, body, { headers: HEADERS(headers) });
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};

export const cashWithdrawal = async (body: any, headers: any): Promise<T.ApiResponse> => {
  try {
    const res = await axios.post(`${BASE_URL}/AEPS/cashwithdrawal`, body, { headers: HEADERS(headers) });
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};

export const balanceEnquiry = async (body: any, headers: any): Promise<T.ApiResponse> => {
  try {
    const res = await axios.post(`${BASE_URL}/AEPS/BalanceEnquiry`, body, { headers: HEADERS(headers) });
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};

export const miniStatement = async (body: any, headers: any): Promise<T.ApiResponse> => {
  try {
    const res = await axios.post(`${BASE_URL}/AEPS/MiniStatement`, body, { headers: HEADERS(headers) });
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};

export const aadhaarPay = async (body: any, headers: any): Promise<T.ApiResponse> => {
  try {
    const res = await axios.post(`${BASE_URL}/AEPS/AadhaarPay`, body, { headers: HEADERS(headers) });
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};

export const listHistory = async (body: any, headers: any): Promise<T.ApiResponse> => {
  try {
    const res = await axios.post(`${BASE_URL}/AEPS/listAepsTxnsHistory`, body, { headers: HEADERS(headers) });
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};

export const ekycSendOtp = async (body: any, headers: any): Promise<T.ApiResponse> => {
  try {
    const res = await axios.post(`${BASE_URL}/AEPS/ekycSendOTP`, body, { headers: HEADERS(headers) });
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};

export const ekycVerifyOtp = async (body: any, headers: any): Promise<T.ApiResponse> => {
  try {
    const res = await axios.post(`${BASE_URL}/AEPS/ekycVerifyOTP`, body, { headers: HEADERS(headers) });
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};

export const ekycResendOtp = async (body: any, headers: any): Promise<T.ApiResponse> => {
  try {
    const res = await axios.post(`${BASE_URL}/AEPS/ekycResendOTP`, body, { headers: HEADERS(headers) });
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};

export const ekycAuth = async (body: any, headers: any): Promise<T.ApiResponse> => {
  try {
    const res = await axios.post(`${BASE_URL}/AEPS/EkycAuthBiometric`, body, { headers: HEADERS(headers) });
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};

export const ekycStatus = async (agentId: string): Promise<T.ApiResponse> => {
  try {
    const res = await axios.get(`${BASE_URL}/AEPS/EkycStatusCheck/${agentId}`);
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};