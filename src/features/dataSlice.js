import { createSlice, current } from "@reduxjs/toolkit";

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
            const existingItem = state.cartItem.find((item) => item.card.info.id === action.payload.card.info.id)
            if (existingItem) {
                const updatedCart = state.cartItem.map((item) =>
                    item?.card?.info?.id === action.payload?.card?.info?.id
                        ? {...item, quantity : item.quantity + 1}
                        : item
                );
                state.cartItem = updatedCart
            }
            else {
                state.cartItem.push(action.payload)
            }
        }
    }
})

export const { addbestOffersData, addRestaurantData, addSingleRestaurantDetails, addItems } = dataSlice.actions

export default dataSlice.reducer