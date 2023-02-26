import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    currentTheme: 'light'
};
const themeSlice = createSlice({
    name:'themeSlice',
    initialState,
    reducers:{
        setTheme:(state)=>{
            state.currentTheme = state.currentTheme === 'light'? 'dark' : 'light'
        }
    }
});

const {reducer: themeReducer, actions:{setTheme}} = themeSlice;
const themeActions ={
    setTheme
}

export{
    themeReducer,
    themeActions
}
