import {createSlice} from "@reduxjs/toolkit";

export const gistSlice = createSlice({
    name: "gists",
    initialState: {
        value: [],
    },
    reducers: {
        updateGists: (state, newGists) => {
            state.value = newGists.payload;
        }
    }
});
export const {updateGists} = gistSlice.actions;
export const gists = state => state.gists.value;

export default gistSlice.reducer;