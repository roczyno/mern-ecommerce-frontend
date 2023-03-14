import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";
import axios from "axios";

export const login = async (dispatch, userInfo) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      "https://shopeasy-api.onrender.com/api/auth/login",
      userInfo
    );
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
