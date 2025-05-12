export interface ApiResponse {
    success: boolean;
    data?: any;
    error?: string;
    statusCode?: number;
  }
  
  export interface BaseRequest {
    token: string;
    agent_id: string;
  }
  
  export interface CreateCustomerRequest extends BaseRequest {
    senderno: string;
    sendername: string;
  }
  
  export interface VerifyCustomerRequest extends BaseRequest {
    senderno: string;
    otp: string;
  }
  
  export interface SenderLimitRequest extends BaseRequest {
    senderno: string;
  }
  
  export interface ResendOtpRequest extends BaseRequest {
    senderno: string;
  }
  
  export interface GetCustomerRequest extends BaseRequest {}
  
  export interface UpdateCustomerNameRequest extends BaseRequest {
    senderno: string;
    sendername: string;
  }
  
  export interface AddBeneficiaryRequest extends BaseRequest {
    senderno: string;
    mobileno: string;
    name: string;
    accountno: string;
    bankname: string;
    ifsccode: string;
  }
  
  export interface GetBeneficiaryListRequest extends BaseRequest {
    senderno: string;
  }
  
  export interface VerifyBeneficiaryRequest extends BaseRequest {
    mobileno: string;
    name: string;
    accountno: string;
    bankname: string;
    ifsccode: string;
    id: string;
    customermobile: string;
  }
  
  export interface DeleteBeneficiaryRequest extends BaseRequest {
    id: string;
  }
  
  export interface MoneyTransferRequest extends BaseRequest {
    customerid: string;
    senderno: string;
    beneficierid: string;
    benefmobile: string;
    benefname: string;
    paymode: string;
    amount: string;
    referenceId: string;
  }
  
  export interface StatusCheckRequest extends BaseRequest {
    txnId: string;
    referenceId: string;
  }
  
  export interface TransferHistoryRequest extends BaseRequest {}
  
  export interface GetChargesTransferRequest extends BaseRequest {
    amount: string;
    paymentMode: string;
    agent: string;
    type: string;
  }
  