import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const SECRET = 'bbps-secret-key';

export function authenticateJWT(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];

    try {
      const user = jwt.verify(token, SECRET);
      (req as any).user = user;
      next();
    } catch (err: any) {
      res.status(403).json({ error: 'Invalid or expired token' });
    }
  } else {
    res.status(401).json({ error: 'Authorization header missing' });
  }
}

export function generateToken(): string {
  const payload = { id: 'bbps-client', role: 'internal' };
  return jwt.sign(payload, SECRET, { expiresIn: '10m' });
}
