import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {tvShowService} from "../services";


const initialState={
    tvShows:[],
    tvShow: null,
    videos:[],
    loading: null
};
const tvShowSlice = createSlice({
    name: 'tvShowSlice',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {results, page} = action.payload;
                state.tvShows = results;
                state.page = page;
                state.loading = false;
            })
            .addCase(getAll.pending, (state)=>{
                state.loading = true;
            })
            .addCase(getTvShow.fulfilled, (state, action) => {
                state.tvShow = action.payload;
                state.loading = false;
            })
            .addCase(getTvShow.pending, (state) => {
                state.loading = true;
            })
            .addCase(getVideos.fulfilled,(state, action)=>{
                const {results} = action.payload;
                state.videos = results;
            })
    }
});

const getAll = createAsyncThunk(
    'tvShowSlice/getAll',
    async ({page}, {rejectWithValue})=>{
        try {
            const {data} = await tvShowService.getAll(page);
            return data;
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getTvShow = createAsyncThunk(
    'tvShowSlice/getTvShow',
    async ({id},{rejectWithValue})=>{
        try {
            const {data} = await tvShowService.getTvShow(id);
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getVideos = createAsyncThunk(
    'tvShowSlice/getVideos',
    async ({id}, {rejectWithValue})=>{
        try {
            const {data} = await tvShowService.getVideos(id);
            return data;
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const {reducer:tvShowReducer} = tvShowSlice;

const tvShowActions ={
    getAll,
    getTvShow,
    getVideos
}
export{
    tvShowReducer,
    tvShowActions
}