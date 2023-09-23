import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "data",
    initialState: {
        bestOffers: [],
        restaurantData: [],
        singleRestaurantDetails: [],
        cartItem: []
    },
    reducers: {
        addbestOffersData: (state, action) => {
            state.bestOffers.push(action.payload)
        },
        addRestaurantData: (state, action) => {
            state.restaurantData.push(action.payload)
        },
        addSingleRestaurantDetails: (state, action) => {
            state.singleRestaurantDetails.push(action.payload)
        },
        addItems: (state, action) => {
            console.log(action.payload)
            // state.cartItem.push(action.payload)
        }

    }
})

export const { addbestOffersData, addRestaurantData, addSingleRestaurantDetails, addItems } = dataSlice.actions

export default dataSlice.reducer