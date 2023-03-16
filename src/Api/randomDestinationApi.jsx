import {
    createApi,
    fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

export const randomDestinationApi = createApi({
    reducerPath: "randomDestination",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://random-data-api.com/api/v2/",
    }),
    endpoints: (builder) => ({
        getRandomDestination: builder.query({
            query: () => "destination",
            query: () => ({
                url: "addresses",
                method: "GET",
            }),
        }),
    }),
});

export const { useGetRandomDestinationQuery } = randomDestinationApi;
