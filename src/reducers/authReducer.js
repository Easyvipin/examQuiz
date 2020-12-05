/* reducer for auth through jwt */
/* will be complete once the backend sends the jwt */

const authReducer = (state, action) => {
    switch (action.type) {
      /* for login case */
      case "LOGIN":
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("token", JSON.stringify(action.payload.token));
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload.user,
          token: action.payload.token
        };
        /* logout case */
      case "LOGOUT":
        localStorage.clear();
        return {
          ...state,
          isAuthenticated: false,
          user: null
        };
      case "CHECKAUTH":
        return {
          ...state,
          isAuthenticated: true,
        };
      default:
        return state;
    }
  };
  export default authReducer; 