import { createSlice } from "@reduxjs/toolkit"; 

const initialState ={
    mode : "dark"
};

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    // creating a function that allows us to change from dark to light, arrow function 
    reducers: {
        setMode: (state)=>{
            state.mode = state.mode === 'light' ? "dark" : 'light';
        }
    }
})
// So we have access to this function
export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
