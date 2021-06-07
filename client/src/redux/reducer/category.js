const { types } = require("redux/actions/types");

const initialState = {
    categories:[],
    loading: true,
    error:null,
    message: ""
  };

export default function (state = initialState , action){
    const { type, payload } = action;
    switch (type) {
        case types.getCategory_success:
            return{
                ...state,
                categories:payload.data.categories,
                loading:false
            }
        case types.getCategory_fail:
            return{
                ...state,
                error:payload.mesage
            }

        default:
            return state
        
    }
}