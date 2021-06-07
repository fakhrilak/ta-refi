import { types } from "./types";
const { API } = require("config/API");

export const getProduct=()=>async(dispatch)=>{
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
    try{
        const res = await API.get("/products",config)
        dispatch({
            type:types.getProduct_success,
            payload: res.data
        })
    }catch(err){
        dispatch({
            type:types.getProduct_fail,
            payload:err.response
        })
    }
}

export const postProduct=(categoryId,productName,
    price,weight,stock,unit,image,desk,active)=>async(dispatch)=>{
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        const formData = new FormData()
        formData.append('categoryId',categoryId)
        formData.append('productName',postProduct)
        formData.append('price',price)
        formData.append('image',image)
        formData.append('weight',weight)
        formData.append('stock',stock)
        formData.append('desc',desk)
        formData.append('isActive',1)
        formData.append('unit',unit)
    const body ={
        categoryId:categoryId,
        productName:productName,
        price:price,
        weight:weight,
        stock:stock,
        unit:unit,
        image:image,
        desc:desk,
        isactive:active
    }
    console.log(formData)
    try{
        const res = await API.post('/products',formData,config);
        dispatch({
            type:types.postProduct_success,
            payload:res.data
        })
    }catch(err){
        console.log(err.response.data)
        dispatch({
            type:types.postProduct_fail,
            payload:err.response
        })
    }
}


export const deletProduct =(id)=>async(dispatch)=>{
    console.log(id)
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
    try{
        const res = await API.delete(`/products/${id}`,config)
        dispatch({
            type:types.deletProduct_success,
            payload:res.data
        })
        dispatch(getProduct())
    }catch(err){
        console.log(err.response)
        dispatch({
            type:types.deletProduct_fail,
            payload:err.response
        })
    }
}