import React, { useContext, useState } from 'react';
import './style.scss';
import { StoreContext } from '../../store';
import types from '../../actions/action-types';
import { Card, Button, Input } from '../../components';
import { Alert, Airplay } from '../../icons';

function HomeContainer() {
  const { state, dispatch } = useContext(StoreContext);

  const [userName, setUsername] = useState('');

  const toggleIsLogined = () => {
    dispatch({
      type: types.LOGOUT_USER,
      payload: !state.userState.isLogin,
    });
  };
  const fillUserObject = () => {
    console.log(userName);
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
        <Alert stroke='red' />
        <Airplay stroke='green' />
        <h1>Im a home container</h1>
        <h5>{state.userState.isLogin ? 'bu true' : 'bu false'}</h5>
        <Button bg='red' type='button' onClick={() => toggleIsLogined()}>
          Toggle User Is Login
        </Button>

        <Button bg='blue' type='button' onClick={() => fillUserObject()}>
          Fill User Mock Data
        </Button>

        <Input
          onChange={(e) => setUsername(e.target.value)}
          value={userName}
          type='text'
          placeholder='Merhaba Dünya '
        />
      </Card>
    </div>
  );
}
export default HomeContainer;
