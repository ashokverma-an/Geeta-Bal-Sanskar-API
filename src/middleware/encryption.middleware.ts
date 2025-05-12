import { Request, Response, NextFunction } from 'express';
import { doubleDecryptAES, doubleEncryptAES } from '../utills/crypto.utils';
import { ApiResponse } from '../types/common.types';

export function decryptMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return next(); // Skip decryption if no body
    }
    const encryptedInput = req.body?.data || req.body;
    const decrypted = doubleDecryptAES(encryptedInput);
    req.body = JSON.parse(decrypted);

    next();
  } catch (err: any) {
    res.status(400).json({
      success: false,
      error: 'Invalid encrypted payload',
      detail: err.message,
      statusCode: 400
    });
  }
}

export function encryptMiddleware(req: Request, res: Response, next: NextFunction) {
    const originalJson = res.json;
  
    res.json = function (response: ApiResponse) {
      try {
        const encryptedResponse: ApiResponse = { ...response };
  
        if (response.data) {
          encryptedResponse.data = doubleEncryptAES(JSON.stringify(response.data));
        }
  
        return originalJson.call(this, encryptedResponse);
      } catch (err: any) {
        return originalJson.call(this, {
          success: false,
          error: 'Encryption failed 1233',
          statusCode: 500
        });
      }
    };
  
    next();
  }

