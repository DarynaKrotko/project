import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../services";

const initialState ={
    search:[],
    query: null,
};
const searchSlice = createSlice({
    name:'searchSlice',
    initialState,
    reducers:{
        setQuery:(state, action)=>{
            state.query = action.payload
        }
    },
    extraReducers:builder => 
        builder.addCase(search.fulfilled, (state, action)=>{
            const {results, page} = action.payload;
            state.search = results
            state.page = page
        })
});

const search = createAsyncThunk(
    'searchSlice/search',
    async  ({query, page}, {rejectWithValue})=>{
        try {
            const {data} = await movieService.search(query, page);
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
}
)

const {reducer: searchReducer, actions:{setQuery}} = searchSlice;

const searchActions = {
    search,
    setQuery
}

export{
    searchReducer,
    searchActions
}



