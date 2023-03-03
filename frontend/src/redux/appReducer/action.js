import axios from "axios"
import {
  GET_ADDRESS,
  GET_CART_TOTAL_QUANTITY,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT,
  POST_ADDRESS,
} from "./actionTypes"

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

export const postUserAddressAction = (payload) => {
  return { type: POST_ADDRESS, payload }
}

export const getUserAddressAction = () => {
  return { type: GET_ADDRESS }
}

export const getWatches = (param) => (dispatch) => {
  dispatch(getProdcutRequestAction())
  axios
    .get(`https://fine-pear-hermit-crab-belt.cyclic.app/product/`, param)
    .then((res) => {
      console.log(res.data)
      dispatch(getProdcutSuccessAction(res.data))
    })
    .catch((er) => {
      dispatch(getProdcutErrorAction())
    })
}

export const getsingleProduct = (id) => (dispatch) => {
  axios.get(`https://e-carry-api.onrender.com/watches/${id}`).then((res) => {
    console.log(res.data)
    dispatch(getSingleProdcutAction(res.data))
  })
}

export const postuserAddress = (userAddress) => (dispatch) => {
  axios
    .post(`https://e-carry-api.onrender.com/address`, userAddress)
    .then((res) => {
      console.log(res.data)
      dispatch(postUserAddressAction(res.data))
    })
    .catch((er) => {
      console.log(er)
    })
}

export const getuserAddress = () => (dispatch) => {
  dispatch(postUserAddressAction())
  axios
    .get(`https://e-carry-api.onrender.com/address`)
    .then((res) => {
      // console.log(res.data)
      dispatch(getUserAddressAction())
    })
    .catch((er) => {
      console.log(er)
    })
}
