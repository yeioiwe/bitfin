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
export const HistoryItem = z
    .object({ id: z.number(), userId: z.number(), pair: z.string(), date: z.string(), profit: z.number() })
    .passthrough();
export const HistoryList = z.object({ items: z.array(HistoryItem) }).passthrough();