import * as AuthActions from "../actions/auth.actions";

// TODO: remove cred default values
const initialState = {
  authenticated: false,
  validating: false,
  error: null,
  cred: {
    _id: "",
    email: "",
    password: "",
  },
  signingUp: false,
  errorInSignup: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AuthActions.SIGNIN.REQUEST:
      return {
        ...state,
        validating: true,
        cred: action.payload,
      };
    case AuthActions.SIGNIN.SUCCESS:
      return {
        ...state,
        authenticated: true,
        validating: false,
        cred: {
          ...state.cred,
          _id: action.payload.id,
        },
      };
    case AuthActions.SIGNIN.FAILURE:
      return {
        ...state,
        authenticated: false,
        validating: false,
        error: action.payload,
      };
    case AuthActions.SIGNUP.REQUEST:
      return {
        ...state,
        signingUp: true,
        cred: action.payload,
      };
    case AuthActions.SIGNUP.SUCCESS:
      return {
        ...state,
        signingUp: false,
      };
    case AuthActions.SIGNUP.FAILURE:
      return {
        ...state,
        signingUp: false,
        errorInSignup: action.payload,
      };
    case AuthActions.SIGNOUT:
      return {
        ...state,
        authenticated: false,
        validating: false,
        cred: {},
      };
    default:
      return state;
  }
}
