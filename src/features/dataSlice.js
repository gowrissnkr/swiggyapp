import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "data",
    initialState: {
        bestOffers: [],
        categoryMenu : []

    },
    reducers: {
        addbestOffersData: (state, action) => {
           state.bestOffers.push(action.payload)
        },
        addCategoryMenuData : (state,action) => {
            state.categoryMenu.push(action.payload)
        }
    }
})

export const {addbestOffersData,addCategoryMenuData} = dataSlice.actions

export default dataSlice.reducer