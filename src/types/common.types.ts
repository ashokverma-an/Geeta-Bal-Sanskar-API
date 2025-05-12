export interface ApiResponse {
    success: boolean;
    message:string;
    data?: any;
    error?: string;
    statusCode?: number;
  }
  
export interface UserFilter {
    role?: string;
  }
  