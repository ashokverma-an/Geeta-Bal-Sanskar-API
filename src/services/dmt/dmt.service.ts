import axios from "axios";

const BASE_URL = process.env.DMT_BASE_URL || "";

export const processCustomerEKYC = async (data: any) => {
  return await axios.post(`${BASE_URL}/V3/dmt/processCustomerEKYC`, data).then(res => res.data);
};

export const sendCustomerOtp = async (data: any) => {
  return await axios.post(`${BASE_URL}/V3/dmt/customer-otp`, data).then(res => res.data);
};

export const createCustomer = async (data: any) => {
  return await axios.post(`${BASE_URL}/V3/dmt/create-customer`, data).then(res => res.data);
};

export const generateTxnOtp = async (data: any) => {
  return await axios.post(`${BASE_URL}/V3/dmt/generateTxnOtp`, data).then(res => res.data);
};

export const fundTransfer = async (data: any) => {
  return await axios.post(`${BASE_URL}/V3/dmt/transaction`, data).then(res => res.data);
};

export const getCustomer = async (data: any) => {
  return await axios.post(`${BASE_URL}/V3/dmt/get-customer`, data).then(res => res.data);
};

export const addBeneficiary = async (data: any) => {
  return await axios.post(`${BASE_URL}/V2/dmt/AddBeneficiar`, data).then(res => res.data);
};

export const verifyBeneficiary = async (data: any) => {
  return await axios.post(`${BASE_URL}/V3/dmt/verifyBeneficiary`, data).then(res => res.data);
};

export const checkTxnStatus = async (data: any) => {
  return await axios.post(`${BASE_URL}/V3/dmt/checkTxnStatus`, data).then(res => res.data);
};

export const getBeneficiaryList = async (query: any) => {
  return await axios.get(`${BASE_URL}/V2/dmt/getBeneficiers`, { params: query }).then(res => res.data);
};
