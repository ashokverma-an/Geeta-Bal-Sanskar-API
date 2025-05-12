// services/user.service.ts
import { handleApiError } from '../../utills/common.utils';
import { ApiResponse, UserFilter } from '../../types/common.types';
import { User } from '../../models/User'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const sampleUsers = [
  { id: 1, name: 'Finsova', role: 'admin' },
  { id: 2, name: 'Tester', role: 'user' },
  { id: 3, name: 'Raj', role: 'admin' },
  { id: 4, name: 'Neha', role: 'user' }
];
const JWT_SECRET = process.env.JWT_SECRET || 'bbps-secret-key'
export const getUsersService = async (filter: UserFilter): Promise<ApiResponse> => {
  try {
    const { role } = filter;
    const filteredUsers = role ? sampleUsers.filter(user => user.role === role) : sampleUsers;

    return {
      success: true,
      message:"",
      data: filteredUsers,
      statusCode: 200
    };
  } catch (error) {
    return handleApiError(error);
  }
};



export const signupService = async (
  data: { name: string; email: string; password: string }
): Promise<ApiResponse> => {
  try {
    const { name, email, password } = data;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return {
        success: false,
        message: 'Email already registered',
        statusCode: 409
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });

    await newUser.save();

    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      JWT_SECRET,
      { expiresIn: '1d' }
    );

    return {
      success: true,
      message: 'User registered successfully',
      data: {
        token,
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email
        }
      },
      statusCode: 201
    };
  } catch (error) {
    console.log('error');
    return handleApiError(error);
  }
};

export const loginService = async (
  data: { email: string; password: string }
): Promise<ApiResponse> => {
  try {
    const { email, password } = data;

    const user = await User.findOne({ email });

    if (!user) {
      return {
        success: false,
        message: 'User not found',
        statusCode: 404
      };
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return {
        success: false,
        message: 'Invalid credentials',
        statusCode: 401
      };
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: '1d' }
    );

    return {
      success: true,
      message: 'Login successful',
      data: {
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email
        }
      },
      statusCode: 200
    };
  } catch (error) {
    return handleApiError(error);
  }
};