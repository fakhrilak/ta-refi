
import {API}  from "../../config/API.js"
import {types} from "../actions/types"

export const getCategory=()=>async(dispatch)=>{
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
    try{
        const res = await API.get("/categories",config);
        dispatch({
            type:types.getCategory_success,
            payload: res.data
        })
    }catch(err){
        dispatch({
            type:types.getCategory_fail,
            payload:err.response
        })
    }
}

export const addCategory=(categoryName)=>async(dispatch)=>{
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
    const body = {
        categoryName:categoryName
    }
    try{
        const res = await API.post("/categories",body,config);
        console.log(res.data)
        dispatch({
            type:types.postCategory_success,
            payload: res.data
        })
        dispatch(getCategory())
    }catch(err){
        dispatch({
            type:types.postCategory_fail,
            payload:err.response
        })
    }
}

export const deletCategory=(id)=>async(dispatch)=>{
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
    try{
        const res = await API.delete(`/categories/${id}`,config)
        dispatch({
            type:types.deletCategory_success,
            payload:res.data
        })
        dispatch(getCategory())
    }catch(err){
        dispatch({
            type:types.deletCategory_fail,
            payload:err.response
        })
    }
}





