import {filtersFetching,filtersFetched,filtersFetchingError} from "../components/NewsFilter/filterSlice"
import {newsFetching, newsFetched, newsFetchingError, newsAdd, newsDeleted} from "../components/NewsList/NewsSlice"


export const toSubmit = (request, arr) =>(dispatch)=>{
    request("http://localhost:3001/news", "POST", JSON.stringify(arr))
        .then((data)=> {console.log(data, "successfully get response")})
        .then(dispatch(newsAdd(arr)))
        .catch((err)=>{console.log(err)})
}
export const toGetFilters = (request)=>(dispatch)=>{
        dispatch(filtersFetching())
        
        request("http://localhost:3001/filters")
            .then(data => dispatch(filtersFetched(data)))
            .catch( ()=> dispatch(filtersFetchingError()))
}

export const toGetNews = (request)=> (dispatch)=>{
    dispatch(newsFetching());
        request("http://localhost:3001/news")
            .then((data)=> dispatch(newsFetched(data)))
            .catch(()=>dispatch(newsFetchingError()))
}
export const toDelete = (request ,id) =>(dispatch)=>{
    request(`http://localhost:3001/news/${id}`, "DELETE")
    .then(data=> console.log(data, "successfully deleted" ))
    .then(dispatch(newsDeleted(id)))
    .catch(err => console.log(err))
}

// //create news
// export const fetching =()=>{
//     return{type: "FETCHING"}
// } 
// export const fetched =(news)=>{
//     return{type: "FETCHED", payload: news}
// } 
// export const error =()=>{
//     return{type: "ERROR"}
// } 
// export const add =(news)=>{
//     return{type: "ADD", payload:news}
// } 

// //filter news
// export const filtersFetching = ()=>{
//     return({type: "FILTERS-FETCHING"})
// } 

// export const filtersFetched = (filters)=>{
//     return({type: "FILTERS-FETCHED", payload : filters})
// } 
// export const filtersFetchingError = ()=>{
//     return({type: "FILTERS-FETCHING-ERROR"})
// } 
// export const activeFilterChanged = (filter) =>{
//     return{type:"ACTIVE-FILTER-CHANGED", payload : filter}
// }
// //delete news
// export const newsDeleted = (id)=>{
//     return{ type: "NEWS-DELETED", payload : id }
// }
