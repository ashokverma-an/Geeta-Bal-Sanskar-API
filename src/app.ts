import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import mongoose from 'mongoose'
import rateLimit from 'express-rate-limit';
import mobikwikRoutes from './services/bpps/mobikwik/mobikwik.routes';
import dmtRoutes from "./services/dmt/dmt.routes";
import aceDmtRoutes from './services/acemoney/dmt/acedmt.routes';
import aceBillPayRoutes from './services/bpps/AesMoney/acebillpay.routes';
import aceAepsRoutes from './services/acemoney/aeps/aesaeps.routes';
import billavenueRoutes from './services//bpps/billavenue/billavenue.routes';
import userData from '../src/routes/usersManagement/user.routes';
import authRoutes from './routes/auth.routes';
import { authenticateJWT } from './middleware/auth.middleware';
import { decryptMiddleware, encryptMiddleware } from './middleware/encryption.middleware';
import { setupSwagger } from './swagger/swagger'; 
import bodyParser from 'body-parser';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
app.use(bodyParser.json());
setupSwagger(app);
mongoose.connect('mongodb://root:rootpassword@localhost:27017/fintech?authSource=admin')
  .then(() => console.log('MongoDB connected'))
  .catch((err:any) => console.error('MongoDB connection error:', err))
app.use('/api/auth', authRoutes);
app.use(decryptMiddleware);
app.use(authenticateJWT);
app.use(encryptMiddleware);
app.use('/api/users',userData);
app.use('/api/bpps/mobikwik', mobikwikRoutes);
app.use("/api/dmt", dmtRoutes);
app.use('/api/acemoney/dmt', aceDmtRoutes);
app.use('/api/bpps/aesmoney', aceBillPayRoutes);
app.use('/api/acemoney/aeps', aceAepsRoutes);
app.use('/api/billavenue', billavenueRoutes);
export default app;
