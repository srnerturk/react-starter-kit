import React from 'react';
import { useForm } from 'react-hook-form';
import { Card, Button, Input } from '../../components';
import { get } from '../../utils/axios-instance';
import { setItem } from '../../utils/local-storage-helper';

function LoginContainer() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    get('/users/1').then((resp) => {
      setItem('token', resp.data.name);
    });
  };
  return (
    <Card width={350} bg='white' p={20}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
          <Input
            name='userName'
            ref={register({ required: true, maxLength: 20 })}
            type='text'
            placeholder='enter username'
          />
        </div>

        <div className='form-group'>
          <Input
            name='password'
            ref={register({ required: true, maxLength: 20 })}
            type='password'
            placeholder='enter password'
          />
        </div>

        <div className='form-group'>
          <Button type='submit'>Login</Button>
        </div>
      </form>
    </Card>
  );
}
export default LoginContainer;
