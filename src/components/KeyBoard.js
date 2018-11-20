import React from 'react';
import PropTypes from 'prop-types';

const Clavier = ({ letter, onClick, feedback}) => {
    return (
        <div>
            <div onClick={() => onClick(letter)} className="block">
                  <span>
                    <button className={`button ${feedback}`}>{letter}</button>
                  </span>
            </div>
        </div>

    )

}
Clavier.propTypes= {
    letter:PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    feedback: PropTypes.string.isRequired,
}
export default Clavier;