import { ApiResponse } from './aesaeps.types';

export const handleApiError = (error: any): ApiResponse => {
  if (error.response) {
    return {
      success: false,
      error: error.response.data?.message || 'API error',
      statusCode: error.response.status
    };
  }
  if (error.request) {
    return {
      success: false,
      error: 'No response from server'
    };
  }
  return {
    success: false,
    error: error.message || 'Unexpected error occurred'
  };
};
