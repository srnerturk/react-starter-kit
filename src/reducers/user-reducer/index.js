/* eslint-disable default-case */
import types from '../../actions/action-types';

// eslint-disable-next-line import/prefer-default-export
export const userReducer = (state, action) => {
  switch (action.type) {
    case types.LOGIN_USER:
      return { ...state.userState, loginedUser: action.payload };
    case types.LOGOUT_USER:
      return { ...state.userState, isLogin: action.payload };
    default:
      return state;
  }
};
