// const initialState ={
//   news : [],
//   loading: "none",
//   filters : [], // buyerda all ,world ... news lar bo'ladi
//   filterLoading : "none",
//   activeFilter : "all",
//   filteredNews : [] // filterlangan yangiliklar shu yerda turadi

// }

// const reducer = (state = initialState, action)=>{

//   switch (action.type) {
//     case "FETCHING":
//       return{
//         ...state,
//         loading: "loading",
//       }
//     case "FETCHED":
//       return{
//         ...state,
//         news : action.payload,
//         filteredNews : state.activeFilter === "all" ? action.payload : action.payload.filter(s => s.category === state.activeFilter),
//         loading : "none"
//       }
//     case "ERROR":
//       return{
//         ...state,
//         loading : "Error"
//       }    
//     case "ADD":
//       const newNews = [...state.news, action.payload ]
//       return{
//         ...state,
//         news: newNews,
//         filteredNews : state.activeFilter === "all" ? newNews : newNews.filter(s => s.category = state.activeFilter)
//       }
//       case "FILTERS-FETCHING": 
//       return{
//         ...state,
//         filterLoading : "loading"
//       }
//       case "FILTERS-FETCHED":
//         return{
//           ...state, 
//           filters : action.payload, // filters ga bizning db.jsondagi filters massivimiz kelib tushadi
//           filterLoading: "none"
//         }
//       case "FILTERS-FETCHING-ERROR":
//         return{
//           ...state,
//           filterLoading : "error"
//         } 
//       case "ACTIVE-FILTER-CHANGED":
//         return{
//           ...state,
//           activeFilter :action.payload,
//           filteredNews: action.payload === "all" ? state.news : state.news.filter(s => s.category === action.payload)
//         }
//       case "NEWS-DELETED" :
//       const newNewsList = state.news.filter(s => s.id !== action.payload)  
//       return{
//           ...state,
//           news : newNewsList,
//           filteredNews : state.activeFilter === "all" ? newNewsList : newNewsList.filter(s => s.category === state.activeFilter)
//         } 
//     default:
//       return state
//   }

// }
// export default reducer