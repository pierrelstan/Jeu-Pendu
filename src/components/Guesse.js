import React from 'react';
import PropTypes from 'prop-types';

const GuesseCount  = ({ guesses }) => (
  <div className="score">{guesses}</div>
);

GuesseCount.propTypes = {
    guesses: PropTypes.number.isRequired,
}
export default GuesseCount;
   

