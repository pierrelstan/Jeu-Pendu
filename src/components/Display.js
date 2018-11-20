import React from 'react';
import PropTypes from 'prop-types';

const HIDDEN_SYMBOL = "_";

const Display= ({ usedLetters,phrasedevine })=> (
        <div className="phrasedevine">
            <button className="phrase">
                {phrasedevine.replace(/\w/g,
                    (letter) => (usedLetters.includes(letter) ? letter : HIDDEN_SYMBOL))}
            </button>
        </div>
    );

Display.propTypes = {
    usedLetters: PropTypes.array.isRequired,
    phrasedevine: PropTypes.string.isRequired
}
export default Display;