import React from 'react';
import PropTypes from 'prop-types';

const KeyBoard = ({ letter, onClick, feedback,index}) => {
    return (
        <div>
            <div onClick={() => onClick(letter,index)} className="block">
                  <span>
                    <button className={`button ${feedback}`}>{letter}</button>
                  </span>
            </div>
        </div>

    )

}
KeyBoard.propTypes= {
    letter:PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    feedback: PropTypes.string.isRequired,
}
export default KeyBoard;