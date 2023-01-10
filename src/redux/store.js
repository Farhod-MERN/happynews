import { configureStore} from "@reduxjs/toolkit";
import news from "../components/NewsList/NewsSlice"
import filter from "../components/NewsFilter/filterSlice"
import { middleware } from "../components/middleware/middleware";

export const store = configureStore({
    reducer : {news, filter},
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(middleware),
    devTools: process.env.NODE_ENV !== "production" ,
})