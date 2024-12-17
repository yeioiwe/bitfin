import { z } from 'zod';

export const AuthDto = z.object({ username: z.string(), password: z.string() }).passthrough();
export const AuthType = z.object({ access_token: z.string() }).passthrough();
