import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
    name: 'fetchStatus',
    initialState: {
        fetchDone: false, // 'false: PENDING' and true: 'DONE'
        currentlyFetching: false,
    },
    reducers: {
        markFetchDone: (state) => {
            return state.fetchDone = true;
        },
        markFetchingStarted: (state) => {
            return state.currentlyFetching = true;
        },
        markFetchingFinished: (state) => {
            return state.currentlyFetching = false;
        }
    }
});

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;

