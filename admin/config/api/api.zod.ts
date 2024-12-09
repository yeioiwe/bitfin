import { z } from 'zod';

export const UserCreateDto = z
    .object({ username: z.string(), password: z.string(), balance: z.number() })
    .passthrough();
export const User = z
    .object({
        id: z.number(),
        balance: z.number(),
        username: z.string(),
        password: z.string(),
        profit_24: z.number(),
        profit_7: z.number(),
        profit_1: z.number(),
    })
    .passthrough();
export const UserList = z.object({ items: z.array(User) }).passthrough();
export const HistoryDto = z
    .object({ userId: z.number(), pair: z.string(), date: z.string(), profit: z.number() })
    .passthrough();
export const HistoryItem = z
    .object({ id: z.number(), userId: z.number(), pair: z.string(), date: z.string(), profit: z.number() })
    .passthrough();
export const HistoryList = z.object({ items: z.array(HistoryItem) }).passthrough();
