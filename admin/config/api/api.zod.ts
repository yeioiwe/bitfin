import { z } from 'zod';

export const UserCreateDto = z.object({ username: z.string(), password: z.string(), name: z.string() }).passthrough();
export const User = z
    .object({ id: z.number(), username: z.string(), name: z.string(), group: z.number(), password: z.string() })
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
export const AdminType = z
    .object({ id: z.number(), login: z.string(), password: z.string(), root: z.boolean().default(false) })
    .passthrough();
export const NewAdminDto = z.object({ login: z.string(), password: z.string() }).passthrough();
export const AdminList = z.object({ items: z.array(AdminType) }).passthrough();
export const CreateBlogDto = z
    .object({
        title: z.string(),
        date: z.string(),
        shortDescription: z.string(),
        content: z.string(),
        like: z.string(),
        avatar: z.string(),
    })
    .passthrough();
export const BlogListItem = z
    .object({ id: z.number(), title: z.string(), date: z.string(), shortDescription: z.string(), like: z.string() })
    .passthrough();
export const BlogList = z.object({ items: z.array(BlogListItem) }).passthrough();
export const BlogItem = z
    .object({
        id: z.number(),
        title: z.string(),
        date: z.string(),
        shortDescription: z.string(),
        content: z.string(),
        avatar: z.string(),
        like: z.string(),
    })
    .passthrough();
