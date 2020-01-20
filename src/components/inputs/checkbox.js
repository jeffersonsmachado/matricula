import React, { useContext } from 'react';
import './styles/checkbox.css';

import { Context } from '../Home';
import { add, remove } from '../../actions/studentActions'

const Checkbox = (props) => {

    const { studentDispatcher } = useContext(Context);

    const handleChange = (e) => {
        e.target.checked
            ? studentDispatcher(add(props.student, props.classId))
            : studentDispatcher(remove(props.student.id, props.classId))
    }

    return (
        <label key={props.student.id} className="checkbox-container">
            {props.student.name}
            <input
                type="checkbox"
                value={props.student.id}
                onChange={handleChange}/>
            <span className="checkmark"></span>
        </label>
    );
}

export default Checkbox;