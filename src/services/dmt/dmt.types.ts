export interface CustomerEKYCRequest {
    CustomerMobileNo: string;
    CustomerName: string;
    AadharNo: string;
    Pid?: string;
    agentid: string;
    Latitude?: string;
    longitude?: string;
    PublicIP?: string;
    dmt_type: string;
  }
  
  export interface OTPGenRequest {
    CustomerMobileNo: string;
    CustomerName: string;
    AadharNo?: string;
    agentid: string;
    Latitude?: string;
    longitude?: string;
    PublicIP?: string;
    dmt_type: string;
  }
  
  export interface CreateCustomerRequest {
    CustomerMobileNo: string;
    CustomerName: string;
    KYCRequestId: string;
    OTPRequestId: string;
    OTPPin: string;
    agentid: string;
    Latitude?: string;
    longitude?: string;
    PublicIP?: string;
    dmt_type: string;
    address?: string;
    pincode?: string;
  }
  
  export interface FundTransferRequest {
    customerId: number;
    beneId: number;
    amount: string;
    Pid?: string;
    referenceId: string;
    OtpRefrenceId: string;
    OtpPin: string;
    Latitude?: string;
    longitude?: string;
    PublicIP?: string;
    paymentMode: string;
    dmt_type: string;
  }
  
  