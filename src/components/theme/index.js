import React from 'react';
import { ThemeProvider } from 'styled-components';
import ThemeSelector from '../../constants/themes';

function Theme({ children }) {
  return <ThemeProvider theme={ThemeSelector}>{children}</ThemeProvider>;
}
export default Theme;
