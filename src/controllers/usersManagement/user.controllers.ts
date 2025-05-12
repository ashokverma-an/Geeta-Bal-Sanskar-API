import { Request, Response } from 'express';
import { getUsersService, signupService, loginService } from '../../services/usersManagement/user.service';

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User management operations
 */
export const UserController = {
  /**
   * @swagger
   * /api/users:
   *   get:
   *     summary: Get all users
   *     tags: [User]
   *     responses:
   *       200:
   *         description: List of users
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 type: object
   *                 properties:
   *                   id:
   *                     type: string
   *                   name:
   *                     type: string
   *       500:
   *         description: Internal server error
   */
  getUsers: async (req: Request, res: Response) => {
    const response = await getUsersService(req.body);
    res.status(response.statusCode || 500).json(response);
  },

  /**
   * @swagger
   * /api/users/login:
   *   post:
   *     summary: Login user
   *     tags: [User]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               email:
   *                 type: string
   *               password:
   *                 type: string
   *     responses:
   *       200:
   *         description: JWT token
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 token:
   *                   type: string
   *       500:
   *         description: Internal server error
   */
  userLogin: async (req: Request, res: Response) => {
    const response = await loginService(req.body);
    res.status(response.statusCode || 500).json(response);
  },

  /**
   * @swagger
   * /api/users/register:
   *   post:
   *     summary: Register a new user
   *     tags: [User]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               email:
   *                 type: string
   *               password:
   *                 type: string
   *               name:
   *                 type: string
   *     responses:
   *       201:
   *         description: User registered successfully
   *       500:
   *         description: Internal server error
   */
  userRegister: async (req: Request, res: Response) => {
    const response = await signupService(req.body);
    res.status(response.statusCode || 500).json(response);
  },
};
