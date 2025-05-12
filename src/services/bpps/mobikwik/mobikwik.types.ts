export interface AuthPayload {
    uid: string;
    password: string;
    memberId?: string;
  }
  
  export interface RechargeQuery {
    uid: string;
    pwd: string;
    cn: string;
    op: string;
    cir: string;
    amt: string;
    reqid: string;
    agtcode: string;
    initchl: string;
    trmnid: string;
    geocode: string;
    pstlcode: string;
    agtmob: string;
  }
  