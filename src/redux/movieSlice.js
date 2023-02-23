import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../services";


const  initialState = {
    movies: [],
    movie:null,
    page:null
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
            })
            .addCase(getMovie.fulfilled, (state, action) => {
                state.movie = action.payload;
            });
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
const {reducer:movieReducer} = movieSlice;
const movieActions = {
    getAll,
    getMovie
};
export{
    movieReducer,
    movieActions
}