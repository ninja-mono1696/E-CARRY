import { LoadData, savData } from "../../utils/accessLoaclStorage";
import { GET_CART_DATA, GET_PRODUCT_ERROR, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_SINGLE_PRODUCT } from "./actionTypes";

const initialState ={
    watches:[],
    singleProduct:LoadData("singleProduct")||{},
    cartData:LoadData("cartData")||[],
    isLoading:false,
    isError:false,
}

export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case GET_PRODUCT_REQUEST:
            return {...state,isLoading:true};
        case GET_PRODUCT_SUCCESS:
            return {...state,isLoading:false,watches:payload};   
        case GET_PRODUCT_ERROR:
            return {...state,isLoading:false,isError:true };
            case GET_SINGLE_PRODUCT:
                savData("singleProduct",payload)
                savData("cartData",[...state.cartData,payload])

        return {...state,isLoading:false,singleProduct:payload,cartData:[state.cartData,payload] };
               
        default:
            return state;        
    }
};