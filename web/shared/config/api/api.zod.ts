import { z } from 'zod';

export const AuthDto = z.object({ username: z.string(), password: z.string() }).passthrough();
export const AuthType = z.object({ access_token: z.string() }).passthrough();
export const User = z
    .object({ id: z.number(), username: z.string(), name: z.string(), password: z.string() })
    .passthrough();
export const WalletItem = z
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
export const MarketItem = z
    .object({
        id: z.number(),
        currency: z.string(),
        status: z.enum(['ACTIVE', 'ERROR', 'DISABLED']).default('ACTIVE'),
        price: z.string(),
    })
    .passthrough();
export const MarketList = z.object({ items: z.array(MarketItem) }).passthrough();
