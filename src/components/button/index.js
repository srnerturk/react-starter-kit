import styled, { css } from 'styled-components';

// eslint-disable-next-line no-use-before-define
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 5px;
  cursor: pointer;
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.4;
    `}
  ${(props) => props.theme};
`;

export default Button;
