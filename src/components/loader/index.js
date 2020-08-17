import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import { Loading } from '../../icons';

function Loader({ isLoading }) {
  const classes = isLoading ? 'loader' : 'loader hide';
  return (
    <div className={classes}>
      <Loading width={24} height={24} stroke='#fff' />
    </div>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
export default Loader;
