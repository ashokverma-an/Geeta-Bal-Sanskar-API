
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'FINTECH-FINSOVA API',
      version: '1.0.0',
      description: 'Swagger documentation for FINTECH services',
    },
    servers: [
      {
        url: 'http://localhost:5000', // or use env
      },
    ],
  },
 apis: ['../controllers/**/*.ts'],
//   apis: [
//     ''
//     './src/routes/**/*.ts',
//     './src/services/**/*.ts', // ← covers nested folders like mobikwik, billavenue, etc.
//   ],
};

const swaggerSpec = swaggerJSDoc(options);

export function setupSwagger(app: Express) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
