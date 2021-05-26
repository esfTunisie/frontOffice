const initialState = {
    token: null,
    dataOffre:null,
    isLogIn:false,
    client:null,
    offreDone:null
  };
  
  function AuthReducer(state = initialState, action) {
    switch (action.type) {
      case "GET_TOKEN":
        return {
          ...state,
          token: action.token,
          isLogIn: action.isLogIn,
          username: action.username,
          password: action.password,
          client: action.client,
          user:action.user
        };
        case "Offre_DONE":
          return {
            ...state,
            offreDone: action.offreDone,
          };
        case "GET_CLIENT":
          return {
            ...state,
            client: action.value,
          };
        case "GET_OFFRE_DATA":
          return {
            ...state,
            dataOffre: action.value,
          };
      case "LOGOUT":
        return {
          token: action.token,
          client: action.client,
          user:action.user,
          isLogIn:action.isLogIn
        };
      default:
        return state;
    }
  }
  
  export default AuthReducer;