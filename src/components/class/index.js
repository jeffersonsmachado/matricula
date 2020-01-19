import React from 'react';
import Checkbox from '../inputs/checkbox';

const Class = (props) => {

    const {
        title,
        subtitle,
        list = []
    } = props;

    return Object.freeze({
        render: render,
    })

    function render() {
        return (
            <div className="class-container">
                <div className="class-title">
                    <h1>{title}</h1>
                </div>
                <div className="class-subtitle">
                    {subtitle}
                </div>
                <div className="students-list">
                    <ul>
                        {
                            list.map(({ name, id }) => (
                                <li key={id}>
                                    <Checkbox option={name} value={id} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    };
}

export default Class;