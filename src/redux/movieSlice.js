import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../services";


const  initialState = {
    movies: [],
    movie:null,
    videos: [],
    page:null,
    loading: null
};
const movieSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{
    },
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {results, page} = action.payload;
                state.movies = results;
                state.page = page;
                state.loading = false;
            })
            .addCase(getAll.pending, (state)=>{
                state.loading = true;
            })
            .addCase(getMovie.fulfilled, (state, action) => {
                state.movie = action.payload;
                state.loading = false;
            })
            .addCase(getMovie.pending, (state) => {
                state.loading = true;
            })
            .addCase(getVideos.fulfilled,(state, action)=>{
                const {results} = action.payload;
                state.videos = results;
            })
    }
});

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page}, {rejectWithValue})=>{
        try {
            const {data} = await movieService.getAll(page);
            return data;
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getMovie = createAsyncThunk(
    'movieSlice/getMovie',
    async ({id},{rejectWithValue})=>{
        try {
            const {data} = await movieService.getMovie(id);
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getVideos = createAsyncThunk(
    'movieSlice/getVideos',
    async ({id}, {rejectWithValue})=>{
        try {
            const {data} = await movieService.getVideos(id);
            return data;
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const {reducer:movieReducer} = movieSlice;

const movieActions = {
    getAll,
    getMovie,
    getVideos
};
export{
    movieReducer,
    movieActions
}