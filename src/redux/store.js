import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./movieSlice";
import {genreReducer} from "./genreSlice";
import {searchReducer} from "./searchSlice";
import {themeReducer} from "./themeSlice";

const rootReducer = combineReducers({
    movies: movieReducer,
    genres: genreReducer,
    search: searchReducer,
    theme:themeReducer
    }
);
const setupStore =  ()=> configureStore({
    reducer: rootReducer
});

export {
    setupStore
}
