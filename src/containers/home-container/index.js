import React, { useContext } from 'react';
import './style.scss';
import { StoreContext } from '../../store';
import types from '../../actions/action-types';
import Card from '../../components/card';
import  {Alert}  from '../../icons';

function HomeContainer() {
  const { state, dispatch } = useContext(StoreContext);
  const toggleIsLogined = () => {
    dispatch({
      type: types.LOGOUT_USER,
      payload: !state.userState.isLogin,
    });
  };
  const fillUserObject = () => {
    const user = {
      name: 'Serhan',
      password: '12345',
    };
    dispatch({
      type: types.LOGIN_USER,
      payload: user,
    });
  };
  return (
    <div className='home'>
      <Card bg='#fff' p={20} mt={10}>
        <Alert />
        <h1>Im a home container</h1>
        <h5>{state.userState.isLogin ? 'bu true' : 'bu false'}</h5>
        <button type='button' onClick={() => toggleIsLogined()}>
          Toggle User Is Login
        </button>

        <button type='button' onClick={() => fillUserObject()}>
          Fill User Mock Data
        </button>
      </Card>
    </div>
  );
}
export default HomeContainer;
