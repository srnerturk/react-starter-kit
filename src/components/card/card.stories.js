import React from 'react';
import Card from './index';

export default {
  title: 'Cards',
};
export const Normal = () => (
  <Card p={20}>
    <h1>Hello, Im a Full Size card</h1>
  </Card>
);

export const Sized = () => (
  <Card width='50%' p={20}>
    <h1>Hello, Im a custom sized card</h1>
  </Card>
);

export const Colored = () => (
  <Card bg='#16a085' width='50%' p={20}>
    <h1 style={{ color: '#fff' }}>Hello, Im a Colored card</h1>
  </Card>
);
