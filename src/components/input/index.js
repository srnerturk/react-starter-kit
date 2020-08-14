import styled from 'styled-components';
import { color, space, layout } from 'styled-system';

const Input = styled('input')(
  color,
  layout,
  space,
  { height: 40 },
  { border: '1px solid #ccc' },
  { borderRadius: 6 }
);

export default Input;
