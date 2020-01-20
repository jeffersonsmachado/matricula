import React, { useRef, useState, useEffect, useContext } from 'react';
import './styles/select.css';

import MaterialSelect from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';

const Select = (props) => {

    const {
        label,
        helperText,
        value,
        disabled,
        options,
        add
    } = props

    const inputLabel = useRef(null);
    const [labelWidth, setLabelWidth] = useState(0);

    const handleChange = (e) => {
        const period = e.target.value;
        add(period);
    }

    useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth)
    }, []);

    return (
        <FormControl variant={'filled'} disabled={disabled}>
            <InputLabel ref={inputLabel} id={'select-outline-label'}>
                {label}
            </InputLabel>
            <MaterialSelect
                labelId={'select'}
                id={'select'}
                value={value}
                onChange={handleChange}
                labelWidth={labelWidth}
                MenuProps={{
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'left'
                    },
                    transformOrigin: {
                        vertical: 'top',
                        horizontal: 'left'
                    },
                    getContentAnchorEl: null
                }}
            >
                <MenuItem value={''}><em>None</em></MenuItem>
                {
                    Array.isArray(options) && options.map( (option, key) => 
                        <MenuItem
                            key={key}
                            value={option.Id}
                        >
                                {option.Description}
                        </MenuItem>
                    )
                }
            </MaterialSelect>
            <FormHelperText>
                {helperText}
                    </FormHelperText>
        </FormControl>
    )
}

export default Select;