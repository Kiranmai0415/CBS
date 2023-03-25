import { AuthTypes } from "../action_types/auth_types";

const initialState = {

};

export default function AuthReducer(state = initialState, action = null) {
  if (!state) {
    state = initialState;
  }
  switch (action.type) {
    case AuthTypes.LOGIN_SUCCESS: {
      const { token } = action.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(action.data));
      return {
        ...action.data,
      };
    }
    case AuthTypes.FORGOT_SUCCESS: {
      const { token } = action.data;
      state.initialState = action.data
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(action.data));
      return {
        ...action.data,
      };
    }


    // case AuthTypes.RESET_SUCCESS: {
    //   const { token } = action.data;
    //   state.initialState = action.data
    //   localStorage.setItem("token", token);
    //   localStorage.setItem("user", JSON.stringify(action.data));
    //   return {
    //     ...action.data,
    //   };
    // }
    default:
      return state;
  }
}
