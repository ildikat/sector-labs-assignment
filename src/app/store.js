import { configureStore } from '@reduxjs/toolkit';
import searchedUsernameReducer from "../reducers/searchedUsernameSlice";
export const store = configureStore({
    reducer: {
        searchedUsername: searchedUsernameReducer,
    },
});