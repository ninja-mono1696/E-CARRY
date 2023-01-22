import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
<<<<<<< HEAD
} from "./actionTypes"

const initialState = {
  isAuth: true,
  token: "",
  isLoading: false,
  isError: false,
}
=======
} from "./actionTypes";

const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};
>>>>>>> 4eda9a97048375965e0b08ea633f5395823081f3

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_REQUEST:
<<<<<<< HEAD
      return { ...state, isLoading: true }
    case USER_LOGIN_SUCCESS:
      return { ...state, isLoading: false, isAuth: true, token: payload }
    case USER_LOGIN_FAILURE:
      return { ...state, isLoading: false, isAuth: false, isError: true }
    default:
      return state
  }
}
=======
      return { ...state, isLoading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, isLoading: false, isAuth: true, token: payload };
    case USER_LOGIN_FAILURE:
      return { ...state, isLoading: false, isAuth: false, isError: true };
    default:
      return state;
  }
};
>>>>>>> 4eda9a97048375965e0b08ea633f5395823081f3
