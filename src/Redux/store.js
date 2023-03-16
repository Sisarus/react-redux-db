import { configureStore } from "@reduxjs/toolkit";
import { destinationAPI } from "../api/destinationApi";
import { randomDestinationApi } from "../api/randomDestinationApi";

export const store = configureStore({
    reducer: {
        [destinationAPI.reducerPath]: destinationAPI.reducer,
        [randomDestinationApi.reducerPath]:
            randomDestinationApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(destinationAPI.middleware)
            .concat(randomDestinationApi.middleware),
});
