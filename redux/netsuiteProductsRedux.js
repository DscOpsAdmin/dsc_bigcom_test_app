import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    productsArray: [],
    productsMappingObject: {}
}

export const netsuiteProductsSlice = createSlice({
    name: "netsuiteProducts",
    initialState: {value: initialStateValue},
    reducers: {
        setProductsInfo: (state, action) => {
            state.value.productsArray = action.payload.productsArray;
            state.value.productsMappingObject = action.payload.productsMappingObject;
        },
        clearProductsInfo: (state, action) => {
            state.value = initialStateValue;
        }
    }
});

export default netsuiteProductsSlice.reducer;