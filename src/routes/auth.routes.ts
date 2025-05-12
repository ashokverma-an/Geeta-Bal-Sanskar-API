import { Router, Request, Response } from 'express';
import { generateToken } from '../middleware/auth.middleware';
import { doubleDecryptAES, doubleEncryptAES } from '../utills/crypto.utils';

const router = Router();
router.post('/getAccess', (req: Request, res: Response) => {
  const { apiKey ,userName, password} = req.body;
  if (apiKey === 'FINSOVA-BBPS-KEY'  &&  userName === 'Finsova' &&
    password === 'Finsova@2025') {
    const token = generateToken();
    res.json({ token,message :"Welcome In Finsova Fintech PVT. LTD."});
  } else {
    res.status(401).json({ error: 'Invalid Credential. Kindly Try With Correct UserName And Password' });
  }
});
router.post('/decrypt', (req: Request, res: Response) => {
    try {
      const { data } = req.body;
      if (!data) throw new Error('Missing encrypted input');
      const decrypted = doubleDecryptAES(data);
      const parsed = JSON.parse(decrypted);
      res.json({
        success: true,
        data: parsed,
        statusCode: 200
      });
    } catch (err: any) {
      res.status(400).json({
        success: false,
        error: 'Decryption failed',
        detail: err.message,
        statusCode: 400
      });
    }
  });
  router.post('/encrypt', (req: Request, res: Response) => {
    try {
      const rawBody = req.body;
      if (!rawBody || Object.keys(rawBody).length === 0) {
        throw new Error('Missing payload');
      }
      const encData = doubleEncryptAES(JSON.stringify(rawBody));
      res.json({
        success: true,
        data: encData,
        statusCode: 200
      });
    } catch (err: any) {
      res.status(400).json({
        success: false,
        error: 'Encryption failed',
        detail: err.message,
        statusCode: 400
      });
    }
  });
export default router;

