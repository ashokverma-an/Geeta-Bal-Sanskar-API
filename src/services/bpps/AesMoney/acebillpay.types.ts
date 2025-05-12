
export interface ApiResponse<T = any> {
    success: boolean;
    data?: T;
    error?: string;
    statusCode?: number;
  }
  
  export interface AutoAccessTokenRequest {
    client_id: string;
    client_secret: string;
  }
  
  export interface AutoAccessTokenResponse {
    access_token: string;
    expires_in: number;
    token_type: string;
  }
  
  export interface CheckBillRequest {
    billerCode: string;
    consumerId: string;
    agent_id: string;
    token: string;
  }
  
  export interface BillDetails {
    customerName: string;
    billNumber: string;
    billDate: string;
    dueDate: string;
    amount: string;
    minAmount?: string;
    billUnit?: string;
    [key: string]: any;
  }
  
  export interface PayBillRequest {
    billerCode: string;
    consumerId: string;
    amount: string;
    transactionId?: string;
    agent_id: string;
    token: string;
  }
  
  export interface PaymentResponse {
    transactionId: string;
    status: string;
    message?: string;
    paidAmount?: string;
  }
  
  export interface GetBillDetailsRequest {
    transactionId: string;
    agent_id: string;
    token: string;
  }
  
  export interface BillStatusResponse {
    transactionId: string;
    status: string;
    paidAmount?: string;
    message?: string;
  }
  
  export interface ValidateBillRequest {
    billerCode: string;
    consumerId: string;
    amount: string;
    agent_id: string;
    token: string;
  }
  
  export interface ValidationResponse {
    valid: boolean;
    message: string;
  }
  
  export interface PayBillStatusRequest {
    transactionId: string;
    agent_id: string;
    token: string;
  }
  
  export interface StatusResponse {
    transactionId: string;
    status: string;
    message?: string;
  }
  
  export interface GetBillerListRequest {
    serviceType: string;
    agent_id: string;
    token: string;
  }
  
  export interface Operator {
    operatorCode: string;
    operatorName: string;
    circleCode?: string;
    circleName?: string;
  }
  
  export interface GetPaymentHistoryRequest {
    fromDate: string;
    toDate: string;
    agent_id: string;
    token: string;
  }
  
  export interface ReversePaymentRequest {
    transactionId: string;
    reason?: string;
    agent_id: string;
    token: string;
  }
  
  export interface CancelPaymentRequest {
    transactionId: string;
    agent_id: string;
    token: string;
  }