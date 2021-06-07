
import {API}  from "../../config/API.js"
import {types} from "../actions/types"

export const handleLogin = (email, password) => async (
    dispatch
  ) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ email, password });
    try {
      const res = await API.post("/auth/login", body, config);
      dispatch({
        type: types.login_success,
        payload: res.data,
      });
    } catch (err) {
      console.log(err.response)
      dispatch({
        type: types.login_fail,
        payload: err.response
      });
    }
  };

  export const handleRegister = (
    email,
    password,
    phone
  ) => async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      email,
      password,
      phoneNumber:phone,
    });
  
    try {
      const res = await API.post("/auth/register", body, config);
      console.log(res)
      dispatch({
        type: types.register_success,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: types.register_fail,
        payload: err
      });
    }
  };

  export const Handle_Logout=()=>async(dispatch)=>{
    dispatch({
      type: types.log_out,
    })
  }