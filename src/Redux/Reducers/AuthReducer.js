const initialState = {
    token: null,
    dataOffre:null,
    isLogIn:false,
  };
  
  function AuthReducer(state = initialState, action) {
    switch (action.type) {
      case "GET_TOKEN":
        return {
          ...state,
          token: action.token,
          isLogIn: action.isLogIn,
          username: action.username,
          password: action.password
        };
        case "GET_OFFRE_DATA":
          return {
            ...state,
            dataOffre: action.value,
          };
      case "LOGOUT":
        return {
          token: null,
        };
      default:
        return state;
    }
  }
  
  export default AuthReducer;