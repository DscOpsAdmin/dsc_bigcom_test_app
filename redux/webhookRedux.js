import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = {
    subscribedEventsList: []
}

export const webhookSlice = createSlice({
    name: "webhook",
    initialState: {value: initialStateValue},
    reducers: {
        setWebhooksInfo: (state, action) => {
            const fetchedEventsList = action.payload.subscribedEventsList;
            state.value.subscribedEventsList = fetchedEventsList;
        },
        addEventSubscription: (state, action) => {
            const { newEventObj } = action.payload
            // const eventFound = !!state.value.subscribedEventsList.find(eventObj => {
            //     return eventObj.scope == newEventObj.scope
            // });
            // if(!eventFound) 
            state.value.subscribedEventsList.push(newEventObj);
        },
        "removeEventSubscription": (state, action) => {
            const { oldEventObj } = action.payload
            state.value.subscribedEventsList = state.value.subscribedEventsList.filter(
                eventObj => eventObj.scope != oldEventObj.scope
            );
        }
    }
});

export default webhookSlice.reducer;