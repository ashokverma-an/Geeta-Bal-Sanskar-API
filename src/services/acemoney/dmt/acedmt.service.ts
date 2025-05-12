import axios from 'axios';
import * as T from './acedmt.types';
import { handleApiError } from './acedmt.utils';

const BASE_URL = process.env.BASE_URL || '';
const HEADERS = (token: string, agent_id: string) => ({
  'Authorization': `Bearer ${token}`,
  'X-Root-id': agent_id,
  'apiKey': process.env.API_KEY || '',
  'clientId': process.env.CLIENT_ID || '',
  'clientSecret': process.env.CLIENT_SECRET || '',
});

export const createCustomer = async (payload: T.CreateCustomerRequest): Promise<T.ApiResponse> => {
  try {
    const { token, ...form } = payload;
    const res = await axios.post(`${BASE_URL}/V2/dmt/CreateCustomer`, form, {
      headers: HEADERS(token, form.agent_id)
    });
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};

export const verifyCustomer = async (payload: T.VerifyCustomerRequest): Promise<T.ApiResponse> => {
  try {
    const { token, ...form } = payload;
    const res = await axios.post(`${BASE_URL}/V2/dmt/VerifyCustomer`, form, {
      headers: HEADERS(token, form.agent_id)
    });
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};

export const senderLimit = async (payload: T.SenderLimitRequest): Promise<T.ApiResponse> => {
  try {
    const { token, ...form } = payload;
    const res = await axios.post(`${BASE_URL}/V2/dmt/senderLimitVerify`, form, {
      headers: HEADERS(token, form.agent_id)
    });
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};

export const resendOtpCustomer = async (payload: T.ResendOtpRequest): Promise<T.ApiResponse> => {
  try {
    const { token, ...form } = payload;
    const res = await axios.post(`${BASE_URL}/V2/dmt/ResendOtpCustomer`, form, {
      headers: HEADERS(token, form.agent_id)
    });
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};

export const getCustomer = async (payload: T.GetCustomerRequest): Promise<T.ApiResponse> => {
  try {
    const { token, ...form } = payload;
    const res = await axios.post(`${BASE_URL}/V2/dmt/getCustomers`, form, {
      headers: HEADERS(token, form.agent_id)
    });
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};

export const updateCustomerName = async (payload: T.UpdateCustomerNameRequest): Promise<T.ApiResponse> => {
  try {
    const { token, ...form } = payload;
    const res = await axios.post(`${BASE_URL}/V2/dmt/UpdateCustomerName`, form, {
      headers: HEADERS(token, form.agent_id)
    });
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};

export const addBeneficiary = async (payload: T.AddBeneficiaryRequest): Promise<T.ApiResponse> => {
  try {
    const { token, ...form } = payload;
    const res = await axios.post(`${BASE_URL}/V2/dmt/AddBeneficiar`, form, {
      headers: HEADERS(token, form.agent_id)
    });
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};

export const getBeneficiaryList = async (payload: T.GetBeneficiaryListRequest): Promise<T.ApiResponse> => {
  try {
    const res = await axios.get(`${BASE_URL}/V2/dmt/getBeneficiers`, {
      params: { agent_id: payload.agent_id, senderno: payload.senderno },
      headers: HEADERS(payload.token, payload.agent_id)
    });
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};

export const verifyBeneficiary = async (payload: T.VerifyBeneficiaryRequest): Promise<T.ApiResponse> => {
  try {
    const { token, ...form } = payload;
    const res = await axios.post(`${BASE_URL}/V2/dmt/VerifyBeneficiar`, form, {
      headers: HEADERS(token, form.agent_id)
    });
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};

export const deleteBeneficiary = async (payload: T.DeleteBeneficiaryRequest): Promise<T.ApiResponse> => {
  try {
    const { token, ...form } = payload;
    const res = await axios.post(`${BASE_URL}/V2/dmt/DeleteBeneficiar`, form, {
      headers: HEADERS(token, form.agent_id)
    });
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};

export const moneyTransfer = async (payload: T.MoneyTransferRequest): Promise<T.ApiResponse> => {
  try {
    const { token, ...form } = payload;
    const res = await axios.post(`${BASE_URL}/V2/dmt/Moneytransfer`, form, {
      headers: HEADERS(token, form.agent_id)
    });
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};

export const statusCheck = async (payload: T.StatusCheckRequest): Promise<T.ApiResponse> => {
  try {
    const { token, ...form } = payload;
    const res = await axios.post(`${BASE_URL}/V2/dmt/transactionStatus`, form, {
      headers: HEADERS(token, payload.agent_id)
    });
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};

export const transferHistory = async (payload: T.TransferHistoryRequest): Promise<T.ApiResponse> => {
  try {
    const { token, ...form } = payload;
    const res = await axios.post(`${BASE_URL}/V2/dmt/listMoneytransferDMT`, form, {
      headers: HEADERS(token, form.agent_id)
    });
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};

export const getChargesTransfer = async (payload: T.GetChargesTransferRequest): Promise<T.ApiResponse> => {
  try {
    const { token, ...form } = payload;
    const res = await axios.post(`${BASE_URL}/V2/dmt/GetChargesTransfer`, form, {
      headers: HEADERS(token, form.agent)
    });
    return { success: true, data: res.data, statusCode: res.status };
  } catch (error) {
    return handleApiError(error);
  }
};