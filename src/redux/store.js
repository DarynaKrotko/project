import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./movieSlice";
import {genreReducer} from "./genreSlice";
import {searchReducer} from "./searchSlice";
import {themeReducer} from "./themeSlice";
import {tvShowReducer} from "./tvShowSlice";
import {tvGenreReducer} from "./tvGenreSlice";

const rootReducer = combineReducers({
    movies: movieReducer,
    genres: genreReducer,
    search: searchReducer,
    theme:themeReducer,
    tvShows: tvShowReducer,
    tvGenres: tvGenreReducer
    }
);
const setupStore =  ()=> configureStore({
    reducer: rootReducer
});

export {
    setupStore
}
