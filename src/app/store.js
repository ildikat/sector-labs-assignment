import {configureStore} from '@reduxjs/toolkit';
import searchedUsernameReducer from "../reducers/searchedUsernameSlice";
import gistsReducer from "../reducers/gistSlice";

export const store = configureStore({
    reducer: {
        searchedUsername: searchedUsernameReducer,
        gists: gistsReducer
    },
});