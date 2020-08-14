import React from 'react';
import { useForm } from 'react-hook-form';
import { Card, Input, Button } from '../../components';

function AboutContainer() {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Card bg='#fff' p={20} mt={10}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name='firstName'
          ref={register({ required: true, maxLength: 20, minLength: 3 })}
        />
        {errors.firstName && 'First name is required'}
        <select name='gender' ref={register}>
          <option value='female'>female</option>
          <option value='male'>male</option>
          <option value='other'>other</option>
        </select>
        <Button type='submit'>Gönder</Button>
      </form>
    </Card>
  );
}
export default AboutContainer;
