import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = {
    categoriesArray: [],
    categoriesMappingObject: {}
}

export const bigcommerceCategoriesSlice = createSlice({
    name: "bigcommerceCategories",
    initialState: {value: initialStateValue},
    reducers: {
        setCategoriesInfo: (state, action) => {
            state.value.categoriesArray = action.payload.categoriesArray;
            state.value.categoriesMappingObject = action.payload.categoriesMappingObject;
        },
        clearCategoriesInfo: (state, action) => {
            state.value = initialStateValue;
        }
    }
});

export default bigcommerceCategoriesSlice.reducer;