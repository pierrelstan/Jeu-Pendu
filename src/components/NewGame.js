import React from 'react';
import PropTypes from 'prop-types';

const NewGame =({onClick})=> (
   <button onClick={() => onClick()} className="newGame-button">New Game</button>
);

NewGame.propTypes = {
    onClick: PropTypes.func.isRequired,
}
export default NewGame;