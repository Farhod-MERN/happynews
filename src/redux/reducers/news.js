const initialState ={
    news : [],
    loading: "none",
  }
  
  const news = (state = initialState, action)=>{
  
    switch (action.type) {
      case "FETCHING":
        return{
          ...state,
          loading: "loading",
        }
      case "FETCHED":
        return{
          ...state,
          news : action.payload,
          loading : "none"
        }
      case "ERROR":
        return{
          ...state,
          loading : "Error"
        }    
      case "ADD":
        return{
          ...state,
          news: [...state.news, action.payload ],
        }
       
        case "NEWS-DELETED" :
        return{
            ...state,
            news : state.news.filter(s => s.id !== action.payload)
          } 
      default:
        return state
    }
  
  }
  export default news