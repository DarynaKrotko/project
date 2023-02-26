import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../services";

const initialState = {
    genres:[],
    genre: null,
    loading:null
};
const genreSlice = createSlice({
        name:'genreSlice',
        initialState,
        reducers:{},
        extraReducers: builder =>
            builder
                .addCase(getAll.fulfilled, (state, action)=>{
                    state.genres = action.payload
                    state.loading = false;
                })
                .addCase(getAll.pending, (state)=>{
                    state.loading = true;
                })
                .addCase(getGenre.fulfilled, (state, action)=>{
                    const {results} = action.payload;
                    state.genre = results;
                    state.loading = false;
                })
                .addCase(getGenre.pending, (state) => {
                    state.loading = true;
                })
    }
);

const getAll = createAsyncThunk(
    'genreSlice/getAll',
    async(_, {rejectWithValue})=>{
        try {
            const {data} = await movieService.getAllGenres();
            return data;
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getGenre = createAsyncThunk(
    'genreSlice/getGenre',
    async ({page,with_genres}, {rejectWithValue})=>{
        try {
            const {data} = await movieService.getOneGenre(page, with_genres);
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const {reducer:genreReducer} = genreSlice;

const genreActions ={
    getAll,
    getGenre
}

export {
    genreReducer,
    genreActions
}