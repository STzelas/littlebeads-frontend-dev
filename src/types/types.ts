import { z } from 'zod';

export const registerSchema = z.object({
  username: z.string().min(3, {error: "Username must be at least 3 characters"}).regex(/^\S+$/, { message: "No spaces allowed" }),
  firstname: z.string().min(3, {error: "First Name must be at least 3 characters"}).regex(/^\S+$/, { message: "No spaces allowed" }),
  lastname: z.string().min(3, {error: "Last Name must be at least 3 characters"}).regex(/^\S+$/, { message: "No spaces allowed" }),
  password: z.string()
        .min(6, {error: "Password must be at least 6 characters"})
        .regex(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/, {error: "Password must have at least 1 uppercase letter, 1 lowercase letter, and 1 number with no spaces."}),
  // Password has a minimum of 6 characters, at least 1 uppercase letter, 1 lowercase letter and at least 1 number and no spaces.
})

export type RegisterFields = z.infer<typeof registerSchema>

export const loginSchema = z.object({
  username: z.string({error: "Username is required"}),
  password: z.string({error: "Password is required"}),
})

export type LoginFields = z.infer<typeof loginSchema>

export type LoginResponse = {
  firstname: string,
  lastname: string,
  token: string,
}

export type AuthContextProps = {
  isAuthenticated: boolean;
  accessToken: string | null;
  userId: number | null;
  loginUser: (fields: LoginFields) => Promise<void>;
  logoutUser: () => void;
  loading: boolean;
}

export type JwtPayload = {
  username?: string;
  userId?: number;
  exp?: number;
}