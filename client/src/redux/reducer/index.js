import { combineReducers } from "redux";


import auth from "./auth"
import category from "./category"
import product from "./product"


export default combineReducers({auth,category,product});