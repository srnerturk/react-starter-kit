import React, { createContext, useReducer } from 'react';
import reducers from '../reducers';

const StoreContext = createContext();
const initialState = {
  userState: {
    loginedUser: {},
    isLogin: false,
  },
};
// eslint-disable-next-line react/prop-types
const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);
  const value = { state, dispatch };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
