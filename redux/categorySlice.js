// frontend/redux/categorySlice.js
import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
    name: 'categories',
    initialState: {
        items: [],
    },
    reducers: {
        setCategories: (state, action) => {
            state.items = action.payload;
        },
    },
});

export const { setCategories } = categorySlice.actions;
export default categorySlice.reducer;
