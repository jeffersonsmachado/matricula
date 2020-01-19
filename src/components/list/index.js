import React, { useState, useEffect } from 'react';

const List = (props) => {

    const {
        classList = []
    } = props;

    const [ classes, setClasses ] = useState([]);

    useEffect(() => {
        setClasses(classList);
        return () => {};
    }, [classList]);

    return  classes.map( (Class, key) => (
        <div key={key}>
            {Class.render()}
        </div>
    ));
}

export default List;