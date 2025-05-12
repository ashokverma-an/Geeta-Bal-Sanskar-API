import crypto from 'crypto';

const AES_KEY = crypto.createHash('sha256').update('FINSOVA-SECRET-KEY').digest(); // 256-bit key
const HMAC_KEY = crypto.createHash('sha256').update('FINSOVA-HMAC-KEY').digest(); // HMAC key
const IV = Buffer.alloc(16, 0); // Static IV for demo

export function doubleEncryptAES(plainText: string): string {
  const cipher = crypto.createCipheriv('aes-256-cbc', AES_KEY, IV);
  let encrypted = cipher.update(plainText, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  const hmac = crypto.createHmac('sha256', HMAC_KEY).update(encrypted).digest('hex');
  return `${encrypted}::${hmac}`;
}

export function doubleDecryptAES(encryptedInput: string): string {
  const [encrypted, hmac] = encryptedInput.split('::');

  const expectedHmac = crypto.createHmac('sha256', HMAC_KEY).update(encrypted).digest('hex');
  if (hmac !== expectedHmac) {
    throw new Error('HMAC verification failed');
  }

  const decipher = crypto.createDecipheriv('aes-256-cbc', AES_KEY, IV);
  let decrypted = decipher.update(encrypted, 'base64', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
