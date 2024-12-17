import { z } from 'zod';

export const UserCreateDto = z.object({ username: z.string(), password: z.string(), name: z.string() }).passthrough();
export const User = z
    .object({ id: z.number(), username: z.string(), name: z.string(), password: z.string() })
    .passthrough();
export const UserList = z.object({ items: z.array(User) }).passthrough();
export const Wallet = z
    .object({
        userId: z.number(),
        USDT: z.string(),
        BTC: z.string(),
        XRP: z.string(),
        BNB: z.string(),
        DOGE: z.string(),
        SOL: z.string(),
    })
    .passthrough();
export const HistoryItem = z
    .object({ id: z.number(), userId: z.number(), pair: z.string(), date: z.string(), profit: z.number() })
    .passthrough();
export const HistoryList = z.object({ items: z.array(HistoryItem) }).passthrough();
export const HistoryDto = z
    .object({ userId: z.string(), pair: z.string(), date: z.string(), profit: z.string() })
    .passthrough();
export const AuthDto = z.object({ login: z.string(), password: z.string() }).passthrough();
export const AuthResponse = z.object({ authToken: z.string() }).passthrough();
