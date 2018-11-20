import React from "react";
import PropTypes from 'prop-types';
const WinOrLost =({ winOrlost })=> (
    <div>
        {winOrlost}
    </div>
);

WinOrLost.propTypes = {
    winOrlost: PropTypes.object.isRequired,
}
export default WinOrLost;