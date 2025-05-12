import { ApiResponse } from '../types/common.types';

export const handleApiError = (error: any): ApiResponse => {
  if (error.response) {
    return {
      success: false,
      message:"",
      error: error.response.data?.message || 'API error',
      statusCode: error.response.status
    };
  }
  if (error.request) {
    return {
      success: false,
       message:"",
      error: 'No response from server'
    };
  }
  return {
    success: false,
     message:"",
    error: error.message || 'Unexpected error occurred'
  };
};
