import React from 'react';

const Selector = (props) => {

    const {
        title
    } = props;

    return (
        <div className="selector-container">
            <label className="selector-label" htmlFor="selector">{title}</label>
            <select name="select" className="selector">
                <option value="">option1</option>
                <option value="">option2</option>
                <option value="">option3</option>
            </select>
        </div>
    );
}

export default Selector;