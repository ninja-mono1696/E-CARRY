import axios from "axios"
import { GET_CART_TOTAL_QUANTITY, GET_PRODUCT_ERROR, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_SINGLE_PRODUCT } from "./actionTypes"


const getProdcutRequestAction=()=>{

    return  {type:GET_PRODUCT_REQUEST }
}


const getProdcutSuccessAction=(payload)=>{

    return  {type:GET_PRODUCT_SUCCESS,payload }
}


 export const getProdcutErrorAction=()=>{

    return  {type:GET_PRODUCT_ERROR }
}

export const getSingleProdcutAction=(payload)=>{

    return  {type:GET_SINGLE_PRODUCT, payload }
}

export const getCarttotalQuantityAction=()=>{
  return {type :GET_CART_TOTAL_QUANTITY}
}

 export const getWatches=()=>(dispatch)=>{
    dispatch(getProdcutRequestAction())
    axios.get(` http://localhost:8080/watches`).then((res)=>{
      console.log(res.data)
      dispatch(getProdcutSuccessAction(res.data))

    }).catch((er)=>{
        dispatch(getProdcutErrorAction())
    })
  }

  export const getsingleProduct=(id)=>(dispatch)=>{
   
    axios.get(` http://localhost:8080/watches/${id}`).then((res)=>{
      console.log(res.data)
      dispatch(getSingleProdcutAction(res.data))

    }).catch((er)=>{
        dispatch(getProdcutErrorAction())
    })
  }


