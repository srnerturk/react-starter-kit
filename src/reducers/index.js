import { userReducer } from './user-reducer';

const mainReducer = (state, action) => {
  return {
    userState: userReducer(state, action),
  };
};

export default mainReducer;
