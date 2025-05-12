export interface BillAvenueServiceInterface {
    fetchBillerInfo(payload: BillAvenuePayload): Promise<any>;
    fetchBill(payload: BillAvenuePayload): Promise<any>;
    makeBillPayment(payload: BillAvenuePayload): Promise<any>;
    getTxnStatus(payload: BillAvenuePayload): Promise<any>;
    registerComplaint(payload: BillAvenuePayload): Promise<any>;
    trackComplaint(payload: BillAvenuePayload): Promise<any>;
    validateBill(payload: BillAvenuePayload): Promise<any>;
    pullPlans(payload: BillAvenuePayload): Promise<any>;
    enquireDeposit(payload: BillAvenuePayload): Promise<any>;
  }
  
  import axios from 'axios';
  import { encryptAES } from './billavenue.utils';
  import { BillAvenuePayload } from './billavenue.types';
  
  const API_URLS = {
    billerInfo: 'https://stgapi.billavenue.com/billpay/extMdmCntrl/mdmRequestNew/xml',
    billFetch: 'https://stgapi.billavenue.com/billpay/extBillCntrl/billFetchRequest/xml',
    billPayment: 'https://stgapi.billavenue.com/billpay/extBillPayCntrl/billPayRequest/xml',
    txnStatus: 'https://stgapi.billavenue.com/billpay/transactionStatus/fetchInfo/xml',
    complaintRegister: 'https://stgapi.billavenue.com/billpay/extComplaints/register/xml',
    complaintTrack: 'https://stgapi.billavenue.com/billpay/extComplaints/track/xml',
    billValidation: 'https://stgapi.billavenue.com/billpay/extBillValCntrl/billValidationRequest/xml',
    planPull: 'https://stgapi.billavenue.com/billpay/extPlanMDM/planMdmRequest/xml',
    depositEnquiry: 'https://stgapi.billavenue.com/billpay/enquireDeposit/fetchDetails/xml'
  };
  
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  
  function buildBody({ xml, accessCode, requestId, instituteId }: BillAvenuePayload) {
    return new URLSearchParams({
      accessCode,
      requestId,
      ver: '1.0',
      instituteId,
      encRequest: encryptAES(xml)
    });
  }
  
  export const BillAvenueService: BillAvenueServiceInterface = {
    fetchBillerInfo: async (payload) => axios.post(API_URLS.billerInfo, buildBody(payload), { headers }),
    fetchBill: async (payload) => axios.post(API_URLS.billFetch, buildBody(payload), { headers }),
    makeBillPayment: async (payload) => axios.post(API_URLS.billPayment, buildBody(payload), { headers }),
    getTxnStatus: async (payload) => axios.post(API_URLS.txnStatus, buildBody(payload), { headers }),
    registerComplaint: async (payload) => axios.post(API_URLS.complaintRegister, buildBody(payload), { headers }),
    trackComplaint: async (payload) => axios.post(API_URLS.complaintTrack, buildBody(payload), { headers }),
    validateBill: async (payload) => axios.post(API_URLS.billValidation, buildBody(payload), { headers }),
    pullPlans: async (payload) => axios.post(API_URLS.planPull, buildBody(payload), { headers }),
    enquireDeposit: async (payload) => axios.post(API_URLS.depositEnquiry, buildBody(payload), { headers })
  };