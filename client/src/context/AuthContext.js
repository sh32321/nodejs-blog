import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "61e9e299817d0679195e24ea",
    username: "john1",
    email: "john1@gmail.com",
  },
  idFetching: false,
  error: false,
};

// _id: "61e8d656245437a374577907",
// username: "jane11",
// email: "jane1@gmail.com",
// isAdmin: false,

// _id: "61e9bd606d4a4a49fb20f2fb",
//     username: "test",
//     email: "test@gmail.com",
//     isAdmin: false,
export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
