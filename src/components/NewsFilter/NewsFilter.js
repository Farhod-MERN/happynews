import useHttp from "../../hook/useHttp";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Spinner";
import Error from "../Error"
import classNames from "classnames"
import { v4 } from "uuid";
import { toGetFilters} from "../../redux/actions";
import { activeFilterChanged } from "./filterSlice";

function NewsFilter() {

    const {filters ,filterLoading, activeFilter} = useSelector(state => state.filter)

    const dispatch = useDispatch()
    const {request} = useHttp()

    useEffect(()=>{
      dispatch(toGetFilters(request))
    //eslint-disable-next-line
    },[])

    if(filterLoading === "loading"){
        return <Spinner />
    }
    else if(filterLoading === "error"){
        return <Error />
    }

    const renderFilters =(arr)=>{
        if(arr.length === 0){
            return <h5 className="text-center mt-5">there aren't any buttons</h5>
        }

        return arr.map(({name, className, label})=>{
            const btnClasses = classNames("btn", className, {
                "active" : name === activeFilter
            })
            return (<button 
                id={name} 
                key={v4()}
                className={btnClasses}
                onClick={()=>dispatch(activeFilterChanged(name))}
                >
                    {label}
                </button>
            )
        })
    }
 
    const element = renderFilters(filters)

  return (
    <div className="card shadow-lg mb-4">
      <div className="card-body">
        <p className="card-text text-dark">Choose Category</p>
        <div className="btn-group d-flex justify-content-space-beetwen">
        {element}
        </div>
      </div>
    </div>
  );
}

export default NewsFilter;
