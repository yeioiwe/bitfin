import Axios, { AxiosError, AxiosRequestConfig } from 'axios';

import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';

function onError(error: unknown) {
    if (error instanceof AxiosError) {
        let errMessage = error.message;
        //TODO : create default error msg
        if (errMessage === error.response?.data?.message) errMessage = 'error default';

        //TODO: add action
        // enqueueSnackbar(errMessage, {
        //     variant: 'error',
        //     // action: notistackActionClose,
        // });
    }
}

// export const axios = Axios.create({
//     baseURL: 'https://bitflnex.online/api/admin',
// });

export const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            staleTime: 5000,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
        },
    },
    queryCache: new QueryCache({ onError }),
    mutationCache: new MutationCache({ onError }),
});

export const axiosCall = <T>(config: AxiosRequestConfig): Promise<T> => {
    const source = Axios.CancelToken.source();
    const promise = axios({ ...config, cancelToken: source.token }).then(({ data }) => data);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    promise.cancel = () => {
        source.cancel('Query was cancelled by React Query');
    };

    return promise;
};

export type ErrorType<Error> = AxiosError<Error>;