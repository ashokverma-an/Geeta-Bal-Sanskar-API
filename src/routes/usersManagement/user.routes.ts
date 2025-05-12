import express from 'express';
import { UserController } from '../../controllers/usersManagement/user.controllers';

const router = express.Router();
router.post('/checking-api', UserController.getUsers);
router.post('/logIn', UserController.userLogin);
router.post('/signUp', UserController.userRegister);
export default router;