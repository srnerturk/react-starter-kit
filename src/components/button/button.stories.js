import React from 'react';
import Button from './index';
import ThemeSelector from '../../constants/themes';

export default {
  title: 'Buttons',
};
export const Normal = () => (
  <Button theme={ThemeSelector.colors.torusRed} type='button'>
    Save
  </Button>
);

export const Blue = () => (
  <Button theme={ThemeSelector.colors.torusBlue} type='button'>
    Save
  </Button>
);

export const Green = () => (
  <Button theme={ThemeSelector.colors.torusGreen} type='button'>
    Save
  </Button>
);
