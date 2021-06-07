import {types} from "../actions/types"
const initialState = {
    isAuthenticated: null,
    loading: true,
    user: null,
    error:null,
    token: localStorage.getItem("token"),
    expire: null,
    message: ""
  };

  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case types.login_success:
        localStorage.setItem("token",payload.data.token.accessToken)
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          token : payload.data.token.accessToken,
          message: payload.status
        };
      case types.login_fail:
      case types.register_success:
        localStorage.setItem("token",payload.data.token.accessToken)
            return {
            ...state,
            isAuthenticated: true,
            loading: false,
            token : payload.token.accessToken,
            message: payload.status
           };
        case types.register_fail:
            return{
                ...state,
                message:payload.message
            }
        case types.log_out:
          localStorage.removeItem("token")
          return {
            ...state,
            token: null,
            isAuthenticated: false,
            loading: false,
          }
      default:
        return state;
    }
  }