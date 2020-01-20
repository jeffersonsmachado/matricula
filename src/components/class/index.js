import React, { useContext } from 'react';
import Checkbox from '../inputs/checkbox';

import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

import {
    remove
} from '../../actions/classActions';

import {
    Context
} from '../Home';

const Class = (props) => {

    const {
        id,
        title,
        subtitle,
        list = []
    } = props;

    const {
        classDispatcher
    } = useContext(Context);

    return (
        <div className="class-container" key={id}>
            <div className="class-title">
                <h1>{title}</h1>
                <button onClick={() => classDispatcher(remove(id))}>
                    <RemoveCircleIcon color={'secondary'}/>
                </button>
            </div>
            <div className="class-subtitle">
                {subtitle}
            </div>
            <div className="students-list">
                <ul>
                    {
                        list.map( (student, key) => {
                            return (
                                <li key={key}>
                                    <Checkbox {...student} />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Class;