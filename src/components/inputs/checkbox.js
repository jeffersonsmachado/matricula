import React from 'react';

const Checkbox = (props) => {

    const {
        option,
        value
    } = props;

    return (
        <label key={value} className="checkbox-container" htmlFor="checkbox">
            {option}
            <input type="checkbox" value={value}/>
            <span className="checkmark"></span>
        </label>
    );
}

export default Checkbox;