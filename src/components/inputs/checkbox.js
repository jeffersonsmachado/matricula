import React from 'react';
import './styles/checkbox.css';

const Checkbox = (props) => {

    const {
        option,
        value
    } = props;

    return (
        <label key={value} className="checkbox-container">
            {option}
            <input type="checkbox" value={value}/>
            <span className="checkmark"></span>
        </label>
    );
}

export default Checkbox;