/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Project API
 * OpenAPI spec version: 1.0
 */
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import type {
    QueryFunction,
    QueryKey,
    UseInfiniteQueryOptions,
    UseInfiniteQueryResult,
    UseQueryOptions,
    UseQueryResult,
} from '@tanstack/react-query';
import type { HistoryList, User } from '../api.schemas';
import { axiosCall } from '.././api.axios';
import type { ErrorType } from '.././api.axios';

export const userGetUser = (signal?: AbortSignal) => {
    return axiosCall<User>({ url: `/user`, method: 'GET', signal });
};

export const getUserGetUserQueryKey = () => {
    return [`/user`] as const;
};

export const getUserGetUserInfiniteQueryOptions = <
    TData = Awaited<ReturnType<typeof userGetUser>>,
    TError = ErrorType<unknown>,
>(options?: {
    query?: UseInfiniteQueryOptions<Awaited<ReturnType<typeof userGetUser>>, TError, TData>;
}) => {
    const { query: queryOptions } = options ?? {};

    const queryKey = queryOptions?.queryKey ?? getUserGetUserQueryKey();

    const queryFn: QueryFunction<Awaited<ReturnType<typeof userGetUser>>> = ({ signal }) => userGetUser(signal);

    return { queryKey, queryFn, ...queryOptions } as UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof userGetUser>>,
        TError,
        TData
    > & { queryKey: QueryKey };
};

export type UserGetUserInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof userGetUser>>>;
export type UserGetUserInfiniteQueryError = ErrorType<unknown>;

export function useUserGetUserInfinite<
    TData = Awaited<ReturnType<typeof userGetUser>>,
    TError = ErrorType<unknown>,
>(options?: {
    query?: UseInfiniteQueryOptions<Awaited<ReturnType<typeof userGetUser>>, TError, TData>;
}): UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } {
    const queryOptions = getUserGetUserInfiniteQueryOptions(options);

    const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

    query.queryKey = queryOptions.queryKey;

    return query;
}

export const getUserGetUserQueryOptions = <
    TData = Awaited<ReturnType<typeof userGetUser>>,
    TError = ErrorType<unknown>,
>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof userGetUser>>, TError, TData>;
}) => {
    const { query: queryOptions } = options ?? {};

    const queryKey = queryOptions?.queryKey ?? getUserGetUserQueryKey();

    const queryFn: QueryFunction<Awaited<ReturnType<typeof userGetUser>>> = ({ signal }) => userGetUser(signal);

    return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
        Awaited<ReturnType<typeof userGetUser>>,
        TError,
        TData
    > & { queryKey: QueryKey };
};

export type UserGetUserQueryResult = NonNullable<Awaited<ReturnType<typeof userGetUser>>>;
export type UserGetUserQueryError = ErrorType<unknown>;

export function useUserGetUser<TData = Awaited<ReturnType<typeof userGetUser>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof userGetUser>>, TError, TData>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
    const queryOptions = getUserGetUserQueryOptions(options);

    const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

    query.queryKey = queryOptions.queryKey;

    return query;
}

export const userGetHistory = (signal?: AbortSignal) => {
    return axiosCall<HistoryList>({ url: `/user/history`, method: 'GET', signal });
};

export const getUserGetHistoryQueryKey = () => {
    return [`/user/history`] as const;
};

export const getUserGetHistoryInfiniteQueryOptions = <
    TData = Awaited<ReturnType<typeof userGetHistory>>,
    TError = ErrorType<unknown>,
>(options?: {
    query?: UseInfiniteQueryOptions<Awaited<ReturnType<typeof userGetHistory>>, TError, TData>;
}) => {
    const { query: queryOptions } = options ?? {};

    const queryKey = queryOptions?.queryKey ?? getUserGetHistoryQueryKey();

    const queryFn: QueryFunction<Awaited<ReturnType<typeof userGetHistory>>> = ({ signal }) => userGetHistory(signal);

    return { queryKey, queryFn, ...queryOptions } as UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof userGetHistory>>,
        TError,
        TData
    > & { queryKey: QueryKey };
};

export type UserGetHistoryInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof userGetHistory>>>;
export type UserGetHistoryInfiniteQueryError = ErrorType<unknown>;

export function useUserGetHistoryInfinite<
    TData = Awaited<ReturnType<typeof userGetHistory>>,
    TError = ErrorType<unknown>,
>(options?: {
    query?: UseInfiniteQueryOptions<Awaited<ReturnType<typeof userGetHistory>>, TError, TData>;
}): UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } {
    const queryOptions = getUserGetHistoryInfiniteQueryOptions(options);

    const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

    query.queryKey = queryOptions.queryKey;

    return query;
}

export const getUserGetHistoryQueryOptions = <
    TData = Awaited<ReturnType<typeof userGetHistory>>,
    TError = ErrorType<unknown>,
>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof userGetHistory>>, TError, TData>;
}) => {
    const { query: queryOptions } = options ?? {};

    const queryKey = queryOptions?.queryKey ?? getUserGetHistoryQueryKey();

    const queryFn: QueryFunction<Awaited<ReturnType<typeof userGetHistory>>> = ({ signal }) => userGetHistory(signal);

    return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
        Awaited<ReturnType<typeof userGetHistory>>,
        TError,
        TData
    > & { queryKey: QueryKey };
};

export type UserGetHistoryQueryResult = NonNullable<Awaited<ReturnType<typeof userGetHistory>>>;
export type UserGetHistoryQueryError = ErrorType<unknown>;

export function useUserGetHistory<
    TData = Awaited<ReturnType<typeof userGetHistory>>,
    TError = ErrorType<unknown>,
>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof userGetHistory>>, TError, TData>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
    const queryOptions = getUserGetHistoryQueryOptions(options);

    const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

    query.queryKey = queryOptions.queryKey;

    return query;
}