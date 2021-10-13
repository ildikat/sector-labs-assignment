import {createSlice} from "@reduxjs/toolkit";

export const gistSlice = createSlice({
    name: "gists",
    initialState: {
        value: [],
        error: ""
    },
    reducers: {
        updateGists: (state, newGists) => {
            state.value = newGists.payload;
            state.error = "";
        },
        updateError: (state, error) => {
            state.error(error);
        }
    }
});
export const {updateGists, updateError} = gistSlice.actions;
export const gists = state => state.gists.value;
export const errors = state => state.gists.error;

export default gistSlice.reducer;