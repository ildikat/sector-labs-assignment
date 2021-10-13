import {createSlice} from "@reduxjs/toolkit";

export const searchedUsernameSlice = createSlice({
    name: "searchedUsername",
    initialState: {
        value: "",
    },
    reducers: {
        changeUsername: (state, action) => {
            state.value = action.payload
        }
    }
});
export const {changeUsername} = searchedUsernameSlice.actions;
export const searchedUsername = state => state.searchedUsername.value;

export default searchedUsernameSlice.reducer;