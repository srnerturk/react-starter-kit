import styled from 'styled-components';
import { color, space, layout } from 'styled-system';

const Card = styled('div')(
  {
    borderRadius: 6,
  },
  {
    boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.09)',
  },
  color,
  layout,
  space
);

export default Card;
