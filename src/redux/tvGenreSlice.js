import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {tvShowService} from "../services";

const initialState={
    genres:[],
    genre:null,
    loading:null
};
const tvGenreSlice = createSlice({
    name:'tvGenreSlice',
    initialState,
    reducers:{},
    extraReducers:builder =>
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
});
const getAll = createAsyncThunk(
    'tvGenreSlice/getAll',
    async(_, {rejectWithValue})=>{
        try {
            const {data} = await tvShowService.getAllGenres();
            return data;
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getGenre = createAsyncThunk(
    'tvGenreSlice/getGenre',
    async ({page,with_genres}, {rejectWithValue})=>{
        try {
            const {data} = await tvShowService.getOneGenre(page, with_genres);
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const {reducer:tvGenreReducer} = tvGenreSlice;

const tvGenreActions ={
    getAll,
    getGenre
}
export{
    tvGenreReducer,
    tvGenreActions
}