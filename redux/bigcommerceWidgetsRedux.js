import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = {
    widgetsArray: [],
    widgetsMappingObject: {}
}

export const bigcommerceWidgetsSlice = createSlice({
    name: "bigcommerceWidgets",
    initialState: {value: initialStateValue},
    reducers: {
        setWidgetsInfo: (state, action) => {
            const logTitle = " setWidgetsInfo() ";
            console.log(logTitle, "EXECUTED");
            state.value.widgetsArray = action.payload.widgetsArray;
            state.value.widgetsMappingObject = action.payload.widgetsMappingObject;
        },
        clearWidgetsInfo: (state, action) => {
            state.value = initialStateValue;
        }
    }
});

export default bigcommerceWidgetsSlice.reducer;