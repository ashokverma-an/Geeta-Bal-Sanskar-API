import app from './src/app';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Swagger UI available at http://localhost:${PORT}/api-docs`);
  console.log(`FINTECH-FINSOVA API is running on http://localhost:${PORT}`);
});