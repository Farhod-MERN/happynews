import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    filters : [], 
    filterLoading : "none",
    activeFilter : "all",
  }

const filterSlice = createSlice({
    name : "filter",
    initialState,
    reducers : {
        filtersFetching : (state) =>{state.filterLoading = "loading"},
        filtersFetched : (state, action) => {
            state.filters = action.payload
            state.filterLoading = "none"
        },
        filtersFetchingError : (state)=>{
            state.filterLoading = "error"
        },
        activeFilterChanged: (state, action) =>{
            state.activeFilter = action.payload
        }
    }
})  

const {actions, reducer} = filterSlice
export default reducer
export const {filtersFetching,filtersFetched,filtersFetchingError, activeFilterChanged} = actions