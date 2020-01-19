import React from 'react';

const Checkbox = (...props) => {

    const {
        option,
        key
    } = props;

    return (
        <label key={key} className="checkbox-container" htmlFor="checkbox">
            {option}
            <input type="checkbox" />
            <span className="checkmark"></span>
        </label>
    );
}

export default Checkbox;