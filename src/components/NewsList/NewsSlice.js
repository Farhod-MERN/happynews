import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    news : [],
    loading: "none",
  }
  
const NewsSlice = createSlice({
    name:"news",
    initialState,
    reducers : {
        newsFetching: (state) =>{ state.loading = "loading"},
        newsFetched: (state, action)=>{
            state.news = action.payload
            state.loading = "none"
        },
        newsFetchingError : (state)=>{state.loading = "error"},
        newsAdd : (state, action)=>{
            state.news.push(action.payload)    
        },
        newsDeleted : (state, action)=>{
            state.news = state.news.filter(s => s.id !== action.payload)
        }
    }
})

const {actions, reducer} = NewsSlice
export default reducer
export const {newsFetching, newsFetched, newsFetchingError, newsAdd, newsDeleted} = actions
