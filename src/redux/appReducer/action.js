import axios from "axios"
import { GET_ADDRESS, GET_CART_TOTAL_QUANTITY, GET_PRODUCT_ERROR, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_SINGLE_PRODUCT, POST_ADDRESS } from "./actionTypes"

const getProdcutRequestAction = () => {
  return { type: GET_PRODUCT_REQUEST }
}

const getProdcutSuccessAction = (payload) => {
  return { type: GET_PRODUCT_SUCCESS, payload }
}

export const getProdcutErrorAction = () => {
  return { type: GET_PRODUCT_ERROR }
}

export const getSingleProdcutAction = (payload) => {
  return { type: GET_SINGLE_PRODUCT, payload }
}

export const getCarttotalQuantityAction = () => {
  return { type: GET_CART_TOTAL_QUANTITY }
}

export const postUserAddressAction=(payload)=>{
  return {type :POST_ADDRESS, payload}
}


export const getUserAddressAction=()=>{
  return {type :GET_ADDRESS}
}

 export const getFilterdWatches=(category)=>(dispatch)=>{
    dispatch(getProdcutRequestAction())
    // console.log(category,color)
    axios.get(` http://localhost:8080/watches?category=${category}`).then((res)=>{
      console.log(res.data)
      dispatch(getProdcutSuccessAction(res.data))

    }).catch((er)=>{
        dispatch(getProdcutErrorAction())
    })
  }

  export const getWatches=(order)=>(dispatch)=>{
    dispatch(getProdcutRequestAction())
    console.log(order)
    axios.get(` http://localhost:8080/watches?_sort=discountPrice&_order=${order}`).then((res)=>{
      console.log(res.data)
      dispatch(getProdcutSuccessAction(res.data))
    })
    .catch((er) => {
      dispatch(getProdcutErrorAction())
    })
}

export const getsingleProduct = (id) => (dispatch) => {
  axios
    .get(` http://localhost:8080/watches/${id}`)
    .then((res) => {
      console.log(res.data)
      dispatch(getSingleProdcutAction(res.data))
    })
  }

  export const postuserAddress=(userAddress)=>(dispatch)=>{
   
   return axios.post(` http://localhost:8080/address`,userAddress).then((res)=>{
      console.log(res.data)
      dispatch(postUserAddressAction(res.data))

    }).catch((er)=>{
      console.log(er)
    })
  }

  
  export const getuserAddress=()=>(dispatch)=>{
    dispatch(postUserAddressAction())
    axios.get(` http://localhost:8080/address`).then((res)=>{
      // console.log(res.data)
      dispatch(getUserAddressAction())

    }).catch((er)=>{
      console.log(er)
    })
  }


