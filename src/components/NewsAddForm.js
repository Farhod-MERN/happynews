import React from "react";
import { useDispatch , useSelector} from "react-redux";
import useHttp from "../hook/useHttp"
import { useState } from "react";
import { toSubmit } from "../redux/actions";
import { v4 } from "uuid"
import { toast } from "react-toastify";

function NewsAddForm() {
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [category, setCategory] = useState("")
    const dispatch = useDispatch()
    // const news = useSelector((state)=> state.news)
    const {request} = useHttp()
    const {filters, filterLoading} = useSelector(state => state.filter)
    
    const onSubmit = async (e)=>{
      e.preventDefault()
      
      const arr = {id : v4(), name, desc, category}

      dispatch(toSubmit(request, arr))

        setCategory("")
        setDesc("")
        setName("")
        toast.success('Successfully created!');
    }

    const renderFilters = (filter, status)=>{
      if(status === "loading"){
        return <option>Loading Options ...</option>
      }else if(status === "error"){
        return <option>Error Options ...</option>
      }
  
      if(filter && filter.length > 0){
        return filter.map(({name, label})=>{
         //eslint-disable-next-line
          if(name === "all") return ;
  
          return <option className="text-dark" key={name} value={name}>{label}</option>
        })
      }
    }

    return (
    <form onSubmit={onSubmit}  className="border p-4 shadow-lg rounded addForm">
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">
          Name for new News
        </label>
        <input
          type="text"
          required
          name="name"
          className="form-control text-dark"
          id="name"
          placeholder="What is the name of news"
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="text" className="form-label fs-4">
          Description
        </label>
        <textarea
          type="text"
          required
          name="desc"
          className="form-control text-dark"
          id="text"
          placeholder="what is your news about ?"
          style={{ height: "120px" }}
          value={desc}
          onChange={(e)=>{setDesc(e.target.value)}}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Choose your Category
        </label>
        <select name="category" id="category" className="form-select text-dark" value={category} onChange={(e)=>{setCategory(e.target.value)}} required>
            <option className="text-dark" >...</option>
            {renderFilters(filters, filterLoading)}
        </select>
      </div>
      <button type="submit" className="w-100 btn btn-primary shadow-lg">Create News</button>
    </form>
  );
}

export default NewsAddForm;
