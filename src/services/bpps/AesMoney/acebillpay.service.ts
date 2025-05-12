import axios from 'axios';
import { handleApiError } from './acebillpay.utils';
import * as T from './acebillpay.types';

const BASE_URL = process.env.BASE_URL || '';

const buildHeaders = (h: any) => ({
  Authorization: h.authorization || '',
  'X-Root-id': h['x-root-id'] || h['X-Root-id'],
  clientId: h.clientid || h.clientId,
  ClientSecret: h.clientsecret || h.ClientSecret,
  distributorCode: h.distributorcode || h.distributorCode,
});

export const autoAccessToken = async (
  body: T.AutoAccessTokenRequest,
  headers: any
): Promise<T.ApiResponse<T.AutoAccessTokenResponse>> => {
  try {
    const res = await axios.post<T.AutoAccessTokenResponse>(
      `${BASE_URL}/AutoAccessToken`,
      body,
      { headers: buildHeaders(headers) }
    );
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};

export const checkBill = async (
  body: T.CheckBillRequest,
  headers: any
): Promise<T.ApiResponse<T.BillDetails>> => {
  try {
    const res = await axios.post<T.BillDetails>(
      `${BASE_URL}/BillPay/CheckBill`,
      body,
      { headers: buildHeaders(headers) }
    );
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};

export const payBill = async (
  body: T.PayBillRequest,
  headers: any
): Promise<T.ApiResponse<T.PaymentResponse>> => {
  try {
    const res = await axios.post<T.PaymentResponse>(
      `${BASE_URL}/BillPay/PayBill`,
      body,
      { headers: buildHeaders(headers) }
    );
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};

export const getBillDetails = async (
  body: T.GetBillDetailsRequest,
  headers: any
): Promise<T.ApiResponse<T.BillStatusResponse>> => {
  try {
    const res = await axios.post<T.BillStatusResponse>(
      `${BASE_URL}/BillPay/GetBillDetails`,
      body,
      { headers: buildHeaders(headers) }
    );
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};

export const validateBill = async (
  body: T.ValidateBillRequest,
  headers: any
): Promise<T.ApiResponse<T.ValidationResponse>> => {
  try {
    const res = await axios.post<T.ValidationResponse>(
      `${BASE_URL}/BillPay/ValidateBill`,
      body,
      { headers: buildHeaders(headers) }
    );
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};

export const payBillStatus = async (
  body: T.PayBillStatusRequest,
  headers: any
): Promise<T.ApiResponse<T.StatusResponse>> => {
  try {
    const res = await axios.post<T.StatusResponse>(
      `${BASE_URL}/BillPay/PayBillStatus`,
      body,
      { headers: buildHeaders(headers) }
    );
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};

export const getBillerList = async (
  body: T.GetBillerListRequest,
  headers: any
): Promise<T.ApiResponse<T.Operator[]>> => {
  try {
    const res = await axios.post<T.Operator[]>(
      `${BASE_URL}/BillPay/GetBillerList`,
      body,
      { headers: buildHeaders(headers) }
    );
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};

export const getPaymentHistory = async (
  body: T.GetPaymentHistoryRequest,
  headers: any
): Promise<T.ApiResponse<T.PaymentResponse[]>> => {
  try {
    const res = await axios.post<T.PaymentResponse[]>(
      `${BASE_URL}/BillPay/GetPaymentHistory`,
      body,
      { headers: buildHeaders(headers) }
    );
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};

export const reversePayment = async (
  body: T.ReversePaymentRequest,
  headers: any
): Promise<T.ApiResponse<T.StatusResponse>> => {
  try {
    const res = await axios.post<T.StatusResponse>(
      `${BASE_URL}/BillPay/ReversePayment`,
      body,
      { headers: buildHeaders(headers) }
    );
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};

export const cancelPayment = async (
  body: T.CancelPaymentRequest,
  headers: any
): Promise<T.ApiResponse<T.StatusResponse>> => {
  try {
    const res = await axios.post<T.StatusResponse>(
      `${BASE_URL}/BillPay/CancelPayment`,
      body,
      { headers: buildHeaders(headers) }
    );
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};