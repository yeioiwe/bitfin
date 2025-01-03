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
import type { BlogItem, BlogList, CommentList, CreateBlogDto, CreateCommentDto } from '../api.schemas';
import { axiosCall } from '.././api.axios';
import type { ErrorType } from '.././api.axios';

export const blogCreatePost = (createBlogDto: CreateBlogDto, signal?: AbortSignal) => {
    return axiosCall<void>({
        url: `/blog`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: createBlogDto,
        signal,
    });
};

export const getBlogCreatePostMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof blogCreatePost>>,
        TError,
        { data: CreateBlogDto },
        TContext
    >;
}): UseMutationOptions<Awaited<ReturnType<typeof blogCreatePost>>, TError, { data: CreateBlogDto }, TContext> => {
    const { mutation: mutationOptions } = options ?? {};

    const mutationFn: MutationFunction<Awaited<ReturnType<typeof blogCreatePost>>, { data: CreateBlogDto }> = props => {
        const { data } = props ?? {};

        return blogCreatePost(data);
    };

    return { mutationFn, ...mutationOptions };
};

export type BlogCreatePostMutationResult = NonNullable<Awaited<ReturnType<typeof blogCreatePost>>>;
export type BlogCreatePostMutationBody = CreateBlogDto;
export type BlogCreatePostMutationError = ErrorType<unknown>;

export const useBlogCreatePost = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof blogCreatePost>>,
        TError,
        { data: CreateBlogDto },
        TContext
    >;
}): UseMutationResult<Awaited<ReturnType<typeof blogCreatePost>>, TError, { data: CreateBlogDto }, TContext> => {
    const mutationOptions = getBlogCreatePostMutationOptions(options);

    return useMutation(mutationOptions);
};
export const blogGetBlogList = (signal?: AbortSignal) => {
    return axiosCall<BlogList>({ url: `/blog/list`, method: 'GET', signal });
};

export const getBlogGetBlogListQueryKey = () => {
    return [`/blog/list`] as const;
};

export const getBlogGetBlogListInfiniteQueryOptions = <
    TData = InfiniteData<Awaited<ReturnType<typeof blogGetBlogList>>>,
    TError = ErrorType<unknown>,
>(options?: {
    query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof blogGetBlogList>>, TError, TData>>;
}) => {
    const { query: queryOptions } = options ?? {};

    const queryKey = queryOptions?.queryKey ?? getBlogGetBlogListQueryKey();

    const queryFn: QueryFunction<Awaited<ReturnType<typeof blogGetBlogList>>> = ({ signal }) => blogGetBlogList(signal);

    return { queryKey, queryFn, ...queryOptions } as UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof blogGetBlogList>>,
        TError,
        TData
    > & { queryKey: DataTag<QueryKey, TData> };
};

export type BlogGetBlogListInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof blogGetBlogList>>>;
export type BlogGetBlogListInfiniteQueryError = ErrorType<unknown>;

export function useBlogGetBlogListInfinite<
    TData = InfiniteData<Awaited<ReturnType<typeof blogGetBlogList>>>,
    TError = ErrorType<unknown>,
>(options: {
    query: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof blogGetBlogList>>, TError, TData>> &
        Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof blogGetBlogList>>, TError, TData>, 'initialData'>;
}): DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
export function useBlogGetBlogListInfinite<
    TData = InfiniteData<Awaited<ReturnType<typeof blogGetBlogList>>>,
    TError = ErrorType<unknown>,
>(options?: {
    query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof blogGetBlogList>>, TError, TData>> &
        Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof blogGetBlogList>>, TError, TData>, 'initialData'>;
}): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
export function useBlogGetBlogListInfinite<
    TData = InfiniteData<Awaited<ReturnType<typeof blogGetBlogList>>>,
    TError = ErrorType<unknown>,
>(options?: {
    query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof blogGetBlogList>>, TError, TData>>;
}): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

export function useBlogGetBlogListInfinite<
    TData = InfiniteData<Awaited<ReturnType<typeof blogGetBlogList>>>,
    TError = ErrorType<unknown>,
>(options?: {
    query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof blogGetBlogList>>, TError, TData>>;
}): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {
    const queryOptions = getBlogGetBlogListInfiniteQueryOptions(options);

    const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<TData, TError> & {
        queryKey: DataTag<QueryKey, TData>;
    };

    query.queryKey = queryOptions.queryKey;

    return query;
}

export const getBlogGetBlogListQueryOptions = <
    TData = Awaited<ReturnType<typeof blogGetBlogList>>,
    TError = ErrorType<unknown>,
>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof blogGetBlogList>>, TError, TData>>;
}) => {
    const { query: queryOptions } = options ?? {};

    const queryKey = queryOptions?.queryKey ?? getBlogGetBlogListQueryKey();

    const queryFn: QueryFunction<Awaited<ReturnType<typeof blogGetBlogList>>> = ({ signal }) => blogGetBlogList(signal);

    return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
        Awaited<ReturnType<typeof blogGetBlogList>>,
        TError,
        TData
    > & { queryKey: DataTag<QueryKey, TData> };
};

export type BlogGetBlogListQueryResult = NonNullable<Awaited<ReturnType<typeof blogGetBlogList>>>;
export type BlogGetBlogListQueryError = ErrorType<unknown>;

export function useBlogGetBlogList<
    TData = Awaited<ReturnType<typeof blogGetBlogList>>,
    TError = ErrorType<unknown>,
>(options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof blogGetBlogList>>, TError, TData>> &
        Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof blogGetBlogList>>, TError, TData>, 'initialData'>;
}): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
export function useBlogGetBlogList<
    TData = Awaited<ReturnType<typeof blogGetBlogList>>,
    TError = ErrorType<unknown>,
>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof blogGetBlogList>>, TError, TData>> &
        Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof blogGetBlogList>>, TError, TData>, 'initialData'>;
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
export function useBlogGetBlogList<
    TData = Awaited<ReturnType<typeof blogGetBlogList>>,
    TError = ErrorType<unknown>,
>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof blogGetBlogList>>, TError, TData>>;
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

export function useBlogGetBlogList<
    TData = Awaited<ReturnType<typeof blogGetBlogList>>,
    TError = ErrorType<unknown>,
>(options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof blogGetBlogList>>, TError, TData>>;
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {
    const queryOptions = getBlogGetBlogListQueryOptions(options);

    const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

    query.queryKey = queryOptions.queryKey;

    return query;
}

export const blogGetPost = (id: number, signal?: AbortSignal) => {
    return axiosCall<BlogItem>({ url: `/blog/${id}`, method: 'GET', signal });
};

export const getBlogGetPostQueryKey = (id: number) => {
    return [`/blog/${id}`] as const;
};

export const getBlogGetPostInfiniteQueryOptions = <
    TData = InfiniteData<Awaited<ReturnType<typeof blogGetPost>>>,
    TError = ErrorType<unknown>,
>(
    id: number,
    options?: { query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof blogGetPost>>, TError, TData>> },
) => {
    const { query: queryOptions } = options ?? {};

    const queryKey = queryOptions?.queryKey ?? getBlogGetPostQueryKey(id);

    const queryFn: QueryFunction<Awaited<ReturnType<typeof blogGetPost>>> = ({ signal }) => blogGetPost(id, signal);

    return { queryKey, queryFn, enabled: !!id, ...queryOptions } as UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof blogGetPost>>,
        TError,
        TData
    > & { queryKey: DataTag<QueryKey, TData> };
};

export type BlogGetPostInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof blogGetPost>>>;
export type BlogGetPostInfiniteQueryError = ErrorType<unknown>;

export function useBlogGetPostInfinite<
    TData = InfiniteData<Awaited<ReturnType<typeof blogGetPost>>>,
    TError = ErrorType<unknown>,
>(
    id: number,
    options: {
        query: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof blogGetPost>>, TError, TData>> &
            Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof blogGetPost>>, TError, TData>, 'initialData'>;
    },
): DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
export function useBlogGetPostInfinite<
    TData = InfiniteData<Awaited<ReturnType<typeof blogGetPost>>>,
    TError = ErrorType<unknown>,
>(
    id: number,
    options?: {
        query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof blogGetPost>>, TError, TData>> &
            Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof blogGetPost>>, TError, TData>, 'initialData'>;
    },
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
export function useBlogGetPostInfinite<
    TData = InfiniteData<Awaited<ReturnType<typeof blogGetPost>>>,
    TError = ErrorType<unknown>,
>(
    id: number,
    options?: { query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof blogGetPost>>, TError, TData>> },
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

export function useBlogGetPostInfinite<
    TData = InfiniteData<Awaited<ReturnType<typeof blogGetPost>>>,
    TError = ErrorType<unknown>,
>(
    id: number,
    options?: { query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof blogGetPost>>, TError, TData>> },
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {
    const queryOptions = getBlogGetPostInfiniteQueryOptions(id, options);

    const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<TData, TError> & {
        queryKey: DataTag<QueryKey, TData>;
    };

    query.queryKey = queryOptions.queryKey;

    return query;
}

export const getBlogGetPostQueryOptions = <
    TData = Awaited<ReturnType<typeof blogGetPost>>,
    TError = ErrorType<unknown>,
>(
    id: number,
    options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof blogGetPost>>, TError, TData>> },
) => {
    const { query: queryOptions } = options ?? {};

    const queryKey = queryOptions?.queryKey ?? getBlogGetPostQueryKey(id);

    const queryFn: QueryFunction<Awaited<ReturnType<typeof blogGetPost>>> = ({ signal }) => blogGetPost(id, signal);

    return { queryKey, queryFn, enabled: !!id, ...queryOptions } as UseQueryOptions<
        Awaited<ReturnType<typeof blogGetPost>>,
        TError,
        TData
    > & { queryKey: DataTag<QueryKey, TData> };
};

export type BlogGetPostQueryResult = NonNullable<Awaited<ReturnType<typeof blogGetPost>>>;
export type BlogGetPostQueryError = ErrorType<unknown>;

export function useBlogGetPost<TData = Awaited<ReturnType<typeof blogGetPost>>, TError = ErrorType<unknown>>(
    id: number,
    options: {
        query: Partial<UseQueryOptions<Awaited<ReturnType<typeof blogGetPost>>, TError, TData>> &
            Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof blogGetPost>>, TError, TData>, 'initialData'>;
    },
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
export function useBlogGetPost<TData = Awaited<ReturnType<typeof blogGetPost>>, TError = ErrorType<unknown>>(
    id: number,
    options?: {
        query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof blogGetPost>>, TError, TData>> &
            Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof blogGetPost>>, TError, TData>, 'initialData'>;
    },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
export function useBlogGetPost<TData = Awaited<ReturnType<typeof blogGetPost>>, TError = ErrorType<unknown>>(
    id: number,
    options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof blogGetPost>>, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

export function useBlogGetPost<TData = Awaited<ReturnType<typeof blogGetPost>>, TError = ErrorType<unknown>>(
    id: number,
    options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof blogGetPost>>, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {
    const queryOptions = getBlogGetPostQueryOptions(id, options);

    const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

    query.queryKey = queryOptions.queryKey;

    return query;
}

export const blogEditPost = (blogItem: BlogItem, signal?: AbortSignal) => {
    return axiosCall<void>({
        url: `/blog/edit`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: blogItem,
        signal,
    });
};

export const getBlogEditPostMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof blogEditPost>>, TError, { data: BlogItem }, TContext>;
}): UseMutationOptions<Awaited<ReturnType<typeof blogEditPost>>, TError, { data: BlogItem }, TContext> => {
    const { mutation: mutationOptions } = options ?? {};

    const mutationFn: MutationFunction<Awaited<ReturnType<typeof blogEditPost>>, { data: BlogItem }> = props => {
        const { data } = props ?? {};

        return blogEditPost(data);
    };

    return { mutationFn, ...mutationOptions };
};

export type BlogEditPostMutationResult = NonNullable<Awaited<ReturnType<typeof blogEditPost>>>;
export type BlogEditPostMutationBody = BlogItem;
export type BlogEditPostMutationError = ErrorType<unknown>;

export const useBlogEditPost = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof blogEditPost>>, TError, { data: BlogItem }, TContext>;
}): UseMutationResult<Awaited<ReturnType<typeof blogEditPost>>, TError, { data: BlogItem }, TContext> => {
    const mutationOptions = getBlogEditPostMutationOptions(options);

    return useMutation(mutationOptions);
};
export const blogDeletePost = (id: number, signal?: AbortSignal) => {
    return axiosCall<void>({ url: `/blog/delete/${id}`, method: 'POST', signal });
};

export const getBlogDeletePostMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof blogDeletePost>>, TError, { id: number }, TContext>;
}): UseMutationOptions<Awaited<ReturnType<typeof blogDeletePost>>, TError, { id: number }, TContext> => {
    const { mutation: mutationOptions } = options ?? {};

    const mutationFn: MutationFunction<Awaited<ReturnType<typeof blogDeletePost>>, { id: number }> = props => {
        const { id } = props ?? {};

        return blogDeletePost(id);
    };

    return { mutationFn, ...mutationOptions };
};

export type BlogDeletePostMutationResult = NonNullable<Awaited<ReturnType<typeof blogDeletePost>>>;

export type BlogDeletePostMutationError = ErrorType<unknown>;

export const useBlogDeletePost = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof blogDeletePost>>, TError, { id: number }, TContext>;
}): UseMutationResult<Awaited<ReturnType<typeof blogDeletePost>>, TError, { id: number }, TContext> => {
    const mutationOptions = getBlogDeletePostMutationOptions(options);

    return useMutation(mutationOptions);
};
export const blogCreateComment = (createCommentDto: CreateCommentDto, signal?: AbortSignal) => {
    return axiosCall<void>({
        url: `/blog/comment`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: createCommentDto,
        signal,
    });
};

export const getBlogCreateCommentMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof blogCreateComment>>,
        TError,
        { data: CreateCommentDto },
        TContext
    >;
}): UseMutationOptions<Awaited<ReturnType<typeof blogCreateComment>>, TError, { data: CreateCommentDto }, TContext> => {
    const { mutation: mutationOptions } = options ?? {};

    const mutationFn: MutationFunction<
        Awaited<ReturnType<typeof blogCreateComment>>,
        { data: CreateCommentDto }
    > = props => {
        const { data } = props ?? {};

        return blogCreateComment(data);
    };

    return { mutationFn, ...mutationOptions };
};

export type BlogCreateCommentMutationResult = NonNullable<Awaited<ReturnType<typeof blogCreateComment>>>;
export type BlogCreateCommentMutationBody = CreateCommentDto;
export type BlogCreateCommentMutationError = ErrorType<unknown>;

export const useBlogCreateComment = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof blogCreateComment>>,
        TError,
        { data: CreateCommentDto },
        TContext
    >;
}): UseMutationResult<Awaited<ReturnType<typeof blogCreateComment>>, TError, { data: CreateCommentDto }, TContext> => {
    const mutationOptions = getBlogCreateCommentMutationOptions(options);

    return useMutation(mutationOptions);
};
export const blogGetComment = (id: number, signal?: AbortSignal) => {
    return axiosCall<CommentList>({ url: `/blog/comment/${id}`, method: 'GET', signal });
};

export const getBlogGetCommentQueryKey = (id: number) => {
    return [`/blog/comment/${id}`] as const;
};

export const getBlogGetCommentInfiniteQueryOptions = <
    TData = InfiniteData<Awaited<ReturnType<typeof blogGetComment>>>,
    TError = ErrorType<unknown>,
>(
    id: number,
    options?: { query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof blogGetComment>>, TError, TData>> },
) => {
    const { query: queryOptions } = options ?? {};

    const queryKey = queryOptions?.queryKey ?? getBlogGetCommentQueryKey(id);

    const queryFn: QueryFunction<Awaited<ReturnType<typeof blogGetComment>>> = ({ signal }) =>
        blogGetComment(id, signal);

    return { queryKey, queryFn, enabled: !!id, ...queryOptions } as UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof blogGetComment>>,
        TError,
        TData
    > & { queryKey: DataTag<QueryKey, TData> };
};

export type BlogGetCommentInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof blogGetComment>>>;
export type BlogGetCommentInfiniteQueryError = ErrorType<unknown>;

export function useBlogGetCommentInfinite<
    TData = InfiniteData<Awaited<ReturnType<typeof blogGetComment>>>,
    TError = ErrorType<unknown>,
>(
    id: number,
    options: {
        query: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof blogGetComment>>, TError, TData>> &
            Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof blogGetComment>>, TError, TData>, 'initialData'>;
    },
): DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
export function useBlogGetCommentInfinite<
    TData = InfiniteData<Awaited<ReturnType<typeof blogGetComment>>>,
    TError = ErrorType<unknown>,
>(
    id: number,
    options?: {
        query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof blogGetComment>>, TError, TData>> &
            Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof blogGetComment>>, TError, TData>, 'initialData'>;
    },
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
export function useBlogGetCommentInfinite<
    TData = InfiniteData<Awaited<ReturnType<typeof blogGetComment>>>,
    TError = ErrorType<unknown>,
>(
    id: number,
    options?: { query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof blogGetComment>>, TError, TData>> },
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

export function useBlogGetCommentInfinite<
    TData = InfiniteData<Awaited<ReturnType<typeof blogGetComment>>>,
    TError = ErrorType<unknown>,
>(
    id: number,
    options?: { query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof blogGetComment>>, TError, TData>> },
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {
    const queryOptions = getBlogGetCommentInfiniteQueryOptions(id, options);

    const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<TData, TError> & {
        queryKey: DataTag<QueryKey, TData>;
    };

    query.queryKey = queryOptions.queryKey;

    return query;
}

export const getBlogGetCommentQueryOptions = <
    TData = Awaited<ReturnType<typeof blogGetComment>>,
    TError = ErrorType<unknown>,
>(
    id: number,
    options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof blogGetComment>>, TError, TData>> },
) => {
    const { query: queryOptions } = options ?? {};

    const queryKey = queryOptions?.queryKey ?? getBlogGetCommentQueryKey(id);

    const queryFn: QueryFunction<Awaited<ReturnType<typeof blogGetComment>>> = ({ signal }) =>
        blogGetComment(id, signal);

    return { queryKey, queryFn, enabled: !!id, ...queryOptions } as UseQueryOptions<
        Awaited<ReturnType<typeof blogGetComment>>,
        TError,
        TData
    > & { queryKey: DataTag<QueryKey, TData> };
};

export type BlogGetCommentQueryResult = NonNullable<Awaited<ReturnType<typeof blogGetComment>>>;
export type BlogGetCommentQueryError = ErrorType<unknown>;

export function useBlogGetComment<TData = Awaited<ReturnType<typeof blogGetComment>>, TError = ErrorType<unknown>>(
    id: number,
    options: {
        query: Partial<UseQueryOptions<Awaited<ReturnType<typeof blogGetComment>>, TError, TData>> &
            Pick<DefinedInitialDataOptions<Awaited<ReturnType<typeof blogGetComment>>, TError, TData>, 'initialData'>;
    },
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
export function useBlogGetComment<TData = Awaited<ReturnType<typeof blogGetComment>>, TError = ErrorType<unknown>>(
    id: number,
    options?: {
        query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof blogGetComment>>, TError, TData>> &
            Pick<UndefinedInitialDataOptions<Awaited<ReturnType<typeof blogGetComment>>, TError, TData>, 'initialData'>;
    },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };
export function useBlogGetComment<TData = Awaited<ReturnType<typeof blogGetComment>>, TError = ErrorType<unknown>>(
    id: number,
    options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof blogGetComment>>, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

export function useBlogGetComment<TData = Awaited<ReturnType<typeof blogGetComment>>, TError = ErrorType<unknown>>(
    id: number,
    options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof blogGetComment>>, TError, TData>> },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {
    const queryOptions = getBlogGetCommentQueryOptions(id, options);

    const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

    query.queryKey = queryOptions.queryKey;

    return query;
}

export const blogDeleteComment = (id: number, signal?: AbortSignal) => {
    return axiosCall<void>({ url: `/blog/comment/${id}`, method: 'POST', signal });
};

export const getBlogDeleteCommentMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof blogDeleteComment>>, TError, { id: number }, TContext>;
}): UseMutationOptions<Awaited<ReturnType<typeof blogDeleteComment>>, TError, { id: number }, TContext> => {
    const { mutation: mutationOptions } = options ?? {};

    const mutationFn: MutationFunction<Awaited<ReturnType<typeof blogDeleteComment>>, { id: number }> = props => {
        const { id } = props ?? {};

        return blogDeleteComment(id);
    };

    return { mutationFn, ...mutationOptions };
};

export type BlogDeleteCommentMutationResult = NonNullable<Awaited<ReturnType<typeof blogDeleteComment>>>;

export type BlogDeleteCommentMutationError = ErrorType<unknown>;

export const useBlogDeleteComment = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof blogDeleteComment>>, TError, { id: number }, TContext>;
}): UseMutationResult<Awaited<ReturnType<typeof blogDeleteComment>>, TError, { id: number }, TContext> => {
    const mutationOptions = getBlogDeleteCommentMutationOptions(options);

    return useMutation(mutationOptions);
};
