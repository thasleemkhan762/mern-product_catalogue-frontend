// frontend/redux/productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        currentPage: 1,
        total: 0,
        searchQuery: '',
        selectedCategory: '',
    },
    reducers: {
        setProducts: (state, action) => {
            state.items = action.payload.products;
            state.total = action.payload.total;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
    },
});

export const { setProducts, setCurrentPage, setSearchQuery, setSelectedCategory } = productSlice.actions;
export default productSlice.reducer;
