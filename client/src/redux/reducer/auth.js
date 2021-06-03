import {types} from "../actions/types"
const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error:null,
    token:null,
    expire: null,
    message: ""
  };

  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case types.login_success:
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          token : payload.token.accessToken,
          message: payload.status
        };
      case types.login_fail:
          return{
              ...state,
              message:payload.status,
          }
      case types.register_success:
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
      default:
        return state;
    }
  }