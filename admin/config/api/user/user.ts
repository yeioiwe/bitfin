/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Project Admin API
 * OpenAPI spec version: 1.0
 */
import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import type {
    DataTag,
    DefinedInitialDataOptions,
    DefinedUseInfiniteQueryResult,
    DefinedUseQueryResult,
    InfiniteData,
    MutationFunction,
    QueryFunction,
    QueryKey,
    UndefinedInitialDataOptions,
    UseInfiniteQueryOptions,
    UseInfiniteQueryResult,
    UseMutationOptions,
    UseMutationResult,
    UseQueryOptions,
    UseQueryResult,
} from '@tanstack/react-query';
import type { HistoryDto, HistoryList, User, UserCreateDto, UserList } from '../api.schemas';
import { axiosCall } from '.././api.axios';
import type { ErrorType } from '.././api.axios';

export const userCreateUser = (userCreateDto: UserCreateDto, signal?: AbortSignal) => {
    return axiosCall<void>({
        url: `/user`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: userCreateDto,
        signal,
    });
};

export const getUserCreateUserMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof userCreateUser>>,
        TError,
        { data: UserCreateDto },
        TContext
    >;
}): UseMutationOptions<Awaited<ReturnType<typeof userCreateUser>>, TError, { data: UserCreateDto }, TContext> => {
    const { mutation: mutationOptions } = options ?? {};

    const mutationFn: MutationFunction<Awaited<ReturnType<typeof userCreateUser>>, { data: UserCreateDto }> = props => {
        const { data } = props ?? {};

        return userCreateUser(data);
    };

    return { mutationFn, ...mutationOptions };
};

export type UserCreateUserMutationResult = NonNullable<Awaited<ReturnType<typeof userCreateUser>>>;
export type UserCreateUserMutationBody = UserCreateDto;
export type UserCreateUserMutationError = ErrorType<unknown>;

export const useUserCreateUser = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof userCreateUser>>,
        TError,
        { data: UserCreateDto },
        TContext
    >;
}): UseMutationResult<Awaited<ReturnType<typeof userCreateUser>>, TError, { data: UserCreateDto }, TContext> => {
    const mutationOptions = getUserCreateUserMutationOptions(options);

    return useMutation(mutationOptions);
};
export const userGetUserList = (signal?: AbortSignal) => {
    return axiosCall<UserList>({ url: `/user/list`, method: 'GET', signal });
};

export const getUserGetUserListQueryKey = () => {
    return [`/user/list`] as const;
};

export const getUserGetUserListInfiniteQueryOptions = <
    TData = InfiniteData<Awaited<ReturnType<typeof userGetUserList>>>,
    TError = ErrorType<unknown>,
>(options?: {
    query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof userGetUserList>>, TError, TData>>;
}) => {
    const { query: queryOptions } = options ?? {};

    const queryKey = queryOptions?.queryKey ?? getUserGetUserListQueryKey();

    const queryFn: QueryFunction<Awaited<ReturnType<typeof userGetUserList>>> = ({ signal }) => userGetUserList(signal);

    return { queryKey, queryFn, ...queryOptions } as UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof userGetUserList>>,
        TError,
        TData
    > & { queryKey: DataTag<QueryKey, TData> };
};

export type UserGetUserListInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof userGetUserList>>>;
export type UserGetUserListInfiniteQueryError = ErrorType<unknown>;

export function useUserGetUserListInfinite<
    TData = InfiniteData<Awaited<ReturnType<typeof userGetUserList>>>,
    TError = ErrorType<unknown>,
>(options: {
    query: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof userGetUserList>>, TError, TData>> &
        Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof userGetUserList>>, TError, TData>, 'initialData'>;
}): DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
export function useUserGetUserListInfinite<
    TData = InfiniteData<Awaited<ReturnType<typeof userGetUserList>>>,
    TError = ErrorType<unknown>,
>(options?: {
    query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof userGetUserList>>, TError, TData>> &
        Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof userGetUserList>>, TError, TData>, 'initialData'>;
}): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
export function useUserGetUserListInfinite<
    TData = InfiniteData<Awaited<ReturnType<typeof userGetUserList>>>,
    TError = ErrorType<unknown>,
>(options?: {
    query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof userGetUserList>>, TError, TData>>;
}): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

export function useUserGetUserListInfinite<
    TData = InfiniteData<Awaited<ReturnType<typeof userGetUserList>>>,
    TError = ErrorType<unknown>,
>(options?: {
    query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof userGetUserList>>, TError, TData>>;
}): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {
    const queryOptions = getUserGetUserListInfiniteQueryOptions(options);

    const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<TData, TError> & {
        queryKey: DataTag<QueryKey, TData>;
    };

    query.queryKey = queryOptions.queryKey;

    return query;
}

export const getUserGetUserListQueryOptions = <
    TData = Awaited<ReturnType<typeof userGetUserList>>,
    TError = ErrorType<unknown>,
>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof userGetUserList>>, TError, TData>>;
}) => {
    const { query: queryOptions } = options ?? {};

    const queryKey = queryOptions?.queryKey ?? getUserGetUserListQueryKey();

    const queryFn: QueryFunction<Awaited<ReturnType<typeof userGetUserList>>> = ({ signal }) => userGetUserList(signal);

    return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
        Awaited<ReturnType<typeof userGetUserList>>,
        TError,
        TData
    > & { queryKey: DataTag<QueryKey, TData> };
};

export type UserGetUserListQueryResult = NonNullable<Awaited<ReturnType<typeof userGetUserList>>>;
export type UserGetUserListQueryError = ErrorType<unknown>;

export function useUserGetUserList<
    TData = Awaited<ReturnType<typeof userGetUserList>>,
    TError = ErrorType<unknown>,
>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof userGetUserList>>, TError, TData>> &
        Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof userGetUserList>>, TError, TData>, 'initialData'>;
}): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
export function useUserGetUserList<
    TData = Awaited<ReturnType<typeof userGetUserList>>,
    TError = ErrorType<unknown>,
>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof userGetUserList>>, TError, TData>> &
        Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof userGetUserList>>, TError, TData>, 'initialData'>;
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
export function useUserGetUserList<
    TData = Awaited<ReturnType<typeof userGetUserList>>,
    TError = ErrorType<unknown>,
>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof userGetUserList>>, TError, TData>>;
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

export function useUserGetUserList<
    TData = Awaited<ReturnType<typeof userGetUserList>>,
    TError = ErrorType<unknown>,
>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof userGetUserList>>, TError, TData>>;
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {
    const queryOptions = getUserGetUserListQueryOptions(options);

    const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

    query.queryKey = queryOptions.queryKey;

    return query;
}

export const userGetUserById = (id: number, signal?: AbortSignal) => {
    return axiosCall<User>({ url: `/user/${id}`, method: 'GET', signal });
};

export const getUserGetUserByIdQueryKey = (id: number) => {
    return [`/user/${id}`] as const;
};

export const getUserGetUserByIdInfiniteQueryOptions = <
    TData = InfiniteData<Awaited<ReturnType<typeof userGetUserById>>>,
    TError = ErrorType<unknown>,
>(
    id: number,
    options?: { query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof userGetUserById>>, TError, TData>> },
) => {
    const { query: queryOptions } = options ?? {};

    const queryKey = queryOptions?.queryKey ?? getUserGetUserByIdQueryKey(id);

    const queryFn: QueryFunction<Awaited<ReturnType<typeof userGetUserById>>> = ({ signal }) =>
        userGetUserById(id, signal);

    return { queryKey, queryFn, enabled: !!id, ...queryOptions } as UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof userGetUserById>>,
        TError,
        TData
    > & { queryKey: DataTag<QueryKey, TData> };
};

export type UserGetUserByIdInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof userGetUserById>>>;
export type UserGetUserByIdInfiniteQueryError = ErrorType<unknown>;

export function useUserGetUserByIdInfinite<
    TData = InfiniteData<Awaited<ReturnType<typeof userGetUserById>>>,
    TError = ErrorType<unknown>,
>(
    id: number,
    options: {
        query: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof userGetUserById>>, TError, TData>> &
            Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof userGetUserById>>, TError, TData>, 'initialData'>;
    },
): DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
export function useUserGetUserByIdInfinite<
    TData = InfiniteData<Awaited<ReturnType<typeof userGetUserById>>>,
    TError = ErrorType<unknown>,
>(
    id: number,
    options?: {
        query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof userGetUserById>>, TError, TData>> &
            Pick<
                UndefinedInitialDataOptions<Awaited<ReturnType<typeof userGetUserById>>, TError, TData>,
                'initialData'
            >;
    },
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
export function useUserGetUserByIdInfinite<
    TData = InfiniteData<Awaited<ReturnType<typeof userGetUserById>>>,
    TError = ErrorType<unknown>,
>(
    id: number,
    options?: { query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof userGetUserById>>, TError, TData>> },
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

export function useUserGetUserByIdInfinite<
    TData = InfiniteData<Awaited<ReturnType<typeof userGetUserById>>>,
    TError = ErrorType<unknown>,
>(
    id: number,
    options?: { query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof userGetUserById>>, TError, TData>> },
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {
    const queryOptions = getUserGetUserByIdInfiniteQueryOptions(id, options);

    const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<TData, TError> & {
        queryKey: DataTag<QueryKey, TData>;
    };

    query.queryKey = queryOptions.queryKey;

    return query;
}

export const getUserGetUserByIdQueryOptions = <
    TData = Awaited<ReturnType<typeof userGetUserById>>,
    TError = ErrorType<unknown>,
>(
    id: number,
    options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof userGetUserById>>, TError, TData>> },
) => {
    const { query: queryOptions } = options ?? {};

    const queryKey = queryOptions?.queryKey ?? getUserGetUserByIdQueryKey(id);

    const queryFn: QueryFunction<Awaited<ReturnType<typeof userGetUserById>>> = ({ signal }) =>
        userGetUserById(id, signal);

    return { queryKey, queryFn, enabled: !!id, ...queryOptions } as UseQueryOptions<
        Awaited<ReturnType<typeof userGetUserById>>,
        TError,
        TData
    > & { queryKey: DataTag<QueryKey, TData> };
};

export type UserGetUserByIdQueryResult = NonNullable<Awaited<ReturnType<typeof userGetUserById>>>;
export type UserGetUserByIdQueryError = ErrorType<unknown>;

export function useUserGetUserById<TData = Awaited<ReturnType<typeof userGetUserById>>, TError = ErrorType<unknown>>(
    id: number,
    options: {
        query: Partial<UseQueryOptions<Awaited<ReturnType<typeof userGetUserById>>, TError, TData>> &
            Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof userGetUserById>>, TError, TData>, 'initialData'>;
    },
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
export function useUserGetUserById<TData = Awaited<ReturnType<typeof userGetUserById>>, TError = ErrorType<unknown>>(
    id: number,
    options?: {
        query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof userGetUserById>>, TError, TData>> &
            Pick<
                UndefinedInitialDataOptions<Awaited<ReturnType<typeof userGetUserById>>, TError, TData>,
                'initialData'
            >;
    },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
export function useUserGetUserById<TData = Awaited<ReturnType<typeof userGetUserById>>, TError = ErrorType<unknown>>(
    id: number,
    options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof userGetUserById>>, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

export function useUserGetUserById<TData = Awaited<ReturnType<typeof userGetUserById>>, TError = ErrorType<unknown>>(
    id: number,
    options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof userGetUserById>>, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {
    const queryOptions = getUserGetUserByIdQueryOptions(id, options);

    const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

    query.queryKey = queryOptions.queryKey;

    return query;
}

export const userEditUser = (user: User, signal?: AbortSignal) => {
    return axiosCall<void>({
        url: `/user/edit`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: user,
        signal,
    });
};

export const getUserEditUserMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof userEditUser>>, TError, { data: User }, TContext>;
}): UseMutationOptions<Awaited<ReturnType<typeof userEditUser>>, TError, { data: User }, TContext> => {
    const { mutation: mutationOptions } = options ?? {};

    const mutationFn: MutationFunction<Awaited<ReturnType<typeof userEditUser>>, { data: User }> = props => {
        const { data } = props ?? {};

        return userEditUser(data);
    };

    return { mutationFn, ...mutationOptions };
};

export type UserEditUserMutationResult = NonNullable<Awaited<ReturnType<typeof userEditUser>>>;
export type UserEditUserMutationBody = User;
export type UserEditUserMutationError = ErrorType<unknown>;

export const useUserEditUser = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof userEditUser>>, TError, { data: User }, TContext>;
}): UseMutationResult<Awaited<ReturnType<typeof userEditUser>>, TError, { data: User }, TContext> => {
    const mutationOptions = getUserEditUserMutationOptions(options);

    return useMutation(mutationOptions);
};
export const userAddHistory = (historyDto: HistoryDto, signal?: AbortSignal) => {
    return axiosCall<void>({
        url: `/user/history`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: historyDto,
        signal,
    });
};

export const getUserAddHistoryMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof userAddHistory>>, TError, { data: HistoryDto }, TContext>;
}): UseMutationOptions<Awaited<ReturnType<typeof userAddHistory>>, TError, { data: HistoryDto }, TContext> => {
    const { mutation: mutationOptions } = options ?? {};

    const mutationFn: MutationFunction<Awaited<ReturnType<typeof userAddHistory>>, { data: HistoryDto }> = props => {
        const { data } = props ?? {};

        return userAddHistory(data);
    };

    return { mutationFn, ...mutationOptions };
};

export type UserAddHistoryMutationResult = NonNullable<Awaited<ReturnType<typeof userAddHistory>>>;
export type UserAddHistoryMutationBody = HistoryDto;
export type UserAddHistoryMutationError = ErrorType<unknown>;

export const useUserAddHistory = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof userAddHistory>>, TError, { data: HistoryDto }, TContext>;
}): UseMutationResult<Awaited<ReturnType<typeof userAddHistory>>, TError, { data: HistoryDto }, TContext> => {
    const mutationOptions = getUserAddHistoryMutationOptions(options);

    return useMutation(mutationOptions);
};
export const userHistoryList = (id: number, signal?: AbortSignal) => {
    return axiosCall<HistoryList>({ url: `/user/history/${id}`, method: 'GET', signal });
};

export const getUserHistoryListQueryKey = (id: number) => {
    return [`/user/history/${id}`] as const;
};

export const getUserHistoryListInfiniteQueryOptions = <
    TData = InfiniteData<Awaited<ReturnType<typeof userHistoryList>>>,
    TError = ErrorType<unknown>,
>(
    id: number,
    options?: { query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof userHistoryList>>, TError, TData>> },
) => {
    const { query: queryOptions } = options ?? {};

    const queryKey = queryOptions?.queryKey ?? getUserHistoryListQueryKey(id);

    const queryFn: QueryFunction<Awaited<ReturnType<typeof userHistoryList>>> = ({ signal }) =>
        userHistoryList(id, signal);

    return { queryKey, queryFn, enabled: !!id, ...queryOptions } as UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof userHistoryList>>,
        TError,
        TData
    > & { queryKey: DataTag<QueryKey, TData> };
};

export type UserHistoryListInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof userHistoryList>>>;
export type UserHistoryListInfiniteQueryError = ErrorType<unknown>;

export function useUserHistoryListInfinite<
    TData = InfiniteData<Awaited<ReturnType<typeof userHistoryList>>>,
    TError = ErrorType<unknown>,
>(
    id: number,
    options: {
        query: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof userHistoryList>>, TError, TData>> &
            Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof userHistoryList>>, TError, TData>, 'initialData'>;
    },
): DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
export function useUserHistoryListInfinite<
    TData = InfiniteData<Awaited<ReturnType<typeof userHistoryList>>>,
    TError = ErrorType<unknown>,
>(
    id: number,
    options?: {
        query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof userHistoryList>>, TError, TData>> &
            Pick<
                UndefinedInitialDataOptions<Awaited<ReturnType<typeof userHistoryList>>, TError, TData>,
                'initialData'
            >;
    },
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
export function useUserHistoryListInfinite<
    TData = InfiniteData<Awaited<ReturnType<typeof userHistoryList>>>,
    TError = ErrorType<unknown>,
>(
    id: number,
    options?: { query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof userHistoryList>>, TError, TData>> },
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

export function useUserHistoryListInfinite<
    TData = InfiniteData<Awaited<ReturnType<typeof userHistoryList>>>,
    TError = ErrorType<unknown>,
>(
    id: number,
    options?: { query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof userHistoryList>>, TError, TData>> },
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {
    const queryOptions = getUserHistoryListInfiniteQueryOptions(id, options);

    const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<TData, TError> & {
        queryKey: DataTag<QueryKey, TData>;
    };

    query.queryKey = queryOptions.queryKey;

    return query;
}

export const getUserHistoryListQueryOptions = <
    TData = Awaited<ReturnType<typeof userHistoryList>>,
    TError = ErrorType<unknown>,
>(
    id: number,
    options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof userHistoryList>>, TError, TData>> },
) => {
    const { query: queryOptions } = options ?? {};

    const queryKey = queryOptions?.queryKey ?? getUserHistoryListQueryKey(id);

    const queryFn: QueryFunction<Awaited<ReturnType<typeof userHistoryList>>> = ({ signal }) =>
        userHistoryList(id, signal);

    return { queryKey, queryFn, enabled: !!id, ...queryOptions } as UseQueryOptions<
        Awaited<ReturnType<typeof userHistoryList>>,
        TError,
        TData
    > & { queryKey: DataTag<QueryKey, TData> };
};

export type UserHistoryListQueryResult = NonNullable<Awaited<ReturnType<typeof userHistoryList>>>;
export type UserHistoryListQueryError = ErrorType<unknown>;

export function useUserHistoryList<TData = Awaited<ReturnType<typeof userHistoryList>>, TError = ErrorType<unknown>>(
    id: number,
    options: {
        query: Partial<UseQueryOptions<Awaited<ReturnType<typeof userHistoryList>>, TError, TData>> &
            Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof userHistoryList>>, TError, TData>, 'initialData'>;
    },
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
export function useUserHistoryList<TData = Awaited<ReturnType<typeof userHistoryList>>, TError = ErrorType<unknown>>(
    id: number,
    options?: {
        query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof userHistoryList>>, TError, TData>> &
            Pick<
                UndefinedInitialDataOptions<Awaited<ReturnType<typeof userHistoryList>>, TError, TData>,
                'initialData'
            >;
    },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
export function useUserHistoryList<TData = Awaited<ReturnType<typeof userHistoryList>>, TError = ErrorType<unknown>>(
    id: number,
    options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof userHistoryList>>, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

export function useUserHistoryList<TData = Awaited<ReturnType<typeof userHistoryList>>, TError = ErrorType<unknown>>(
    id: number,
    options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof userHistoryList>>, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {
    const queryOptions = getUserHistoryListQueryOptions(id, options);

    const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

    query.queryKey = queryOptions.queryKey;

    return query;
}