import { z } from 'zod';

export const AuthDto = z.object({ username: z.string(), password: z.string() }).passthrough();
export const AuthType = z.object({ access_token: z.string() }).passthrough();
export const User = z
    .object({
        id: z.number(),
        balance: z.number(),
        username: z.string(),
        profit_24: z.number(),
        profit_7: z.number(),
        profit_1: z.number(),
    })
    .passthrough();
