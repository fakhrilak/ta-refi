const { types } = require("redux/actions/types");

const initialState = {
    products:[],
    loading: true,
    error:null,
    message: ""
  };

export default function (state = initialState , action){
    const { type, payload } = action;
    switch (type) {
        case types.getProduct_success:
            return{
                ...state,
                products:payload.data.products,
                loading:false
            }
        case types.getProduct_fail:
            return{
                ...state,
                error:payload.mesage
            }

        default:
            return state
        
    }
}