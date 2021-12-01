import { createRequestTypes, action } from "../../utils/redux";

export const SIGNIN = createRequestTypes("SIGNIN");
export const SIGNUP = createRequestTypes("SIGNUP");
export const SIGNOUT = "SIGNOUT";

export const signIn = {
  request: (credentials) => action(SIGNIN.REQUEST, credentials),
  success: (data) => action(SIGNIN.SUCCESS, data),
  failure: (error) => action(SIGNIN.FAILURE, error),
};
export const signUp = {
  request: (credentials) => action(SIGNUP.REQUEST, credentials),
  success: (data) => action(SIGNUP.SUCCESS, data),
  failure: (error) => action(SIGNUP.FAILURE, error),
};

export const signOut = {
  request: () => action(SIGNOUT),
};
