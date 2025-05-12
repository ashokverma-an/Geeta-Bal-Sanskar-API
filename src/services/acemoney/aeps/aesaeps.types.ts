export interface ApiResponse {
    success: boolean;
    data?: any;
    error?: string;
    statusCode?: number;
  }
  
  export interface AepsRequestBase {
    agent_id: string;
    token: string;
  }
  
  export interface BankDetailsRequestHeaders {
    'X-Root-id': string;
    clientId: string;
    ClientSecret: string;
    distributorCode: string;
    authorization?: string;
  }
  
  export interface AepsTxnRequestBody {
    agent_id: string;
    data: string;
    latitude: string;
    longitude: string;
    aadhaarNo: string;
    nationalbankidentification: string;
    remarks?: string;
    bank: string;
    mobilenumber: string;
    transcationamount?: string;
    type: string;
  }
  
  export interface EkycSendOtpBody {
    agent_id: string;
    aadhaarNo: string;
  }
  
  export interface EkycVerifyOtpBody {
    agent_id: string;
    otp: string;
    primaryKeyId: string;
    encodeTxnId: string;
  }
  
  export interface EkycResendOtpBody {
    agent_id: string;
    primaryKeyId: string;
    encodeTxnId: string;
  }
  
  export interface EkycAuthBody {
    agent_id: string;
    primaryKeyId: string;
    encodeTxnId: string;
    remarks?: string;
    data: string;
  }
  
  export interface AepsHistoryRequestBody {
    agent: string;
    fromdate?: string;
    todate?: string;
  }
  