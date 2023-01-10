const initialState ={
    filters : [], 
    filterLoading : "none",
    activeFilter : "all",
  }
  
  const filter = (state = initialState, action)=>{
  
    switch (action.type) {
        case "FILTERS-FETCHING": 
        return{
          ...state,
          filterLoading : "loading"
        }
        case "FILTERS-FETCHED":
          return{
            ...state, 
            filters : action.payload, // filters ga bizning db.jsondagi filters massivimiz kelib tushadi
            filterLoading: "none"
          }
        case "FILTERS-FETCHING-ERROR":
          return{
            ...state,
            filterLoading : "error"
          } 
        case "ACTIVE-FILTER-CHANGED":
          return{
            ...state,
            activeFilter :action.payload,
          }
      default:
        return state
    }
  
  }
  export default filter