import { z } from 'zod';

export const UserCreateDto = z.object({ username: z.string(), password: z.string(), name: z.string() }).passthrough();
export const User = z
    .object({ id: z.number(), username: z.string(), name: z.string(), password: z.string() })
    .passthrough();
export const UserList = z.object({ items: z.array(User) }).passthrough();
export const AuthDto = z.object({ login: z.string(), password: z.string() }).passthrough();
export const AuthResponse = z.object({ authToken: z.string() }).passthrough();
