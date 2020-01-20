import React, { useContext } from 'react';
import './styles/checkbox.css';

import { Context } from '../Home';
import { add, remove } from '../../actions/studentActions'

const Checkbox = (props) => {

    const { studentDispatcher } = useContext(Context);

    const handleChange = (e) => {
        e.target.checked
            ? studentDispatcher(add(props))
            : studentDispatcher(remove(props))
    }

    return (
        <label key={props.id} className="checkbox-container">
            {props.name}
            <input
                type="checkbox"
                value={props.id}
                onChange={handleChange}
            />
            <span className="checkmark"></span>
        </label>
    );
}

export default Checkbox;