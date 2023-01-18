import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    productsArray: [],
    productsMappingObject: {},
    metaData: {
        totalInventoryCount: 0,
        totalVariantsCount: 0,
        primaryCategory: "N/A"
    }
}

export const bigcommerceProductsSlice = createSlice({
    name: "bigcommerceProducts",
    initialState: {value: initialStateValue},
    reducers: {
        setProductsInfo: (state, action) => {
            const logTitle = " setProductsInfo() ";
            console.log(logTitle, "EXECUTED");
            state.value.productsArray = action.payload.productsArray;
            state.value.productsMappingObject = action.payload.productsMappingObject;
            state.value.metaData = action.payload.metaData;
        },
        clearProductsInfo: (state, action) => {
            state.value = initialStateValue;
        }
    }
});

export default bigcommerceProductsSlice.reducer;