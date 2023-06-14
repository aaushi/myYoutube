import { createSlice } from "@reduxjs/toolkit";

const AppSlice=createSlice({
    name:'AppSlice',
    initialState:{
        isMenuOpen:false
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        }
    }
})

export const {toggleMenu}=AppSlice.actions;
export default AppSlice.reducer;
