import styled from 'styled-components';
import { color, space, layout } from 'styled-system';

const Input = styled('input')(
  color,
  layout,
  space,
  { height: 36 },
  { width: '100%' },
  { paddingLeft: '10px' },
  { border: '1px solid #ccc' },
  { borderRadius: 6 }
);

export default Input;
