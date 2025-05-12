import crypto from 'crypto';

const keyHex = '6B39756ABEC6F3B8610D80D7047FA6AB'; // Provided by bhanu
const iv = Buffer.from([...Array(16).keys()]); // Same as PHP script IV

export function encryptAES(xml: string): string {
  const key = Buffer.from(crypto.createHash('md5').update(keyHex).digest('hex'), 'hex');
  const cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
  let encrypted = cipher.update(xml, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

export function decryptAES(hexEncrypted: string): string {
  const encryptedBuffer = Buffer.from(hexEncrypted, 'hex');
  const key = Buffer.from(crypto.createHash('md5').update(keyHex).digest('hex'), 'hex');
  const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
  let decrypted = decipher.update(encryptedBuffer, undefined, 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
