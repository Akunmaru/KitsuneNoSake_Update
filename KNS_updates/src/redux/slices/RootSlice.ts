import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "root",
    initialState: {
        alcohol_content: "Alcohol",
        brand: "Bottle Name",
        country_origin: "Country of Origin",
        price: "Price Per Bottle",
    },
    reducers: {
        chooseAlcohol: (state, action) => { state.alcohol_content = action.payload },
        chooseBottle: (state, action) => { state.brand = action.payload },
        chooseCountry: (state, action) => { state.country_origin = action.payload },
        choosePrice: (state, action) => { state.price = action.payload },
    }
})

export const reducer = rootSlice.reducer
export const { chooseAlcohol, chooseBottle, chooseCountry, choosePrice} = rootSlice.actions