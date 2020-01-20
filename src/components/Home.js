import React, { useReducer, useState, useEffect } from 'react';

import Student from './student';
import Class from './class';
import Header from './header';
import Footer from './footer';
import Select from './inputs/select';

import Button from '@material-ui/core/Button';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

import studentReducer from '../reducers/studentReducer';
import classReducer from '../reducers/classReducer';

import {
    add as addClass
} from '../actions/classActions';


const student1 = Student({ id: 1, name: 'John Doe' });
const student2 = Student({ id: 2, name: 'Jane Doe' });
const student3 = Student({ id: 3, name: 'Cloe Doe' });
const student4 = Student({ id: 4, name: 'Doug Doe' });

const class1 = {
    id: 1,
    title: 'Português',
    subtitle: 'Turma P-1',
    list: [student1, student2]
};

const class2 = {
    id: 2,
    title: 'Matemática',
    subtitle: 'Turma M-1',
    list: [student3, student4]
};

export const Context = React.createContext();

const Home = () => {

    const [origin, setOrigin] = useState('');
    const [target, setTarget] = useState('');

    const [classes, classDispatcher] = useReducer(classReducer, []);
    const [students, studentDispatcher] = useReducer(studentReducer, []);

    const handlePeriodChange = (e, setPeriod) => {
        setPeriod(e.target.value);
    }

    const handleSubmit = () => {
        console.log(students, origin, target);
    }

    useEffect(() => {
        console.log('RENDERING FROM USE EFFECT');
        classDispatcher(addClass(class1));
        classDispatcher(addClass(class2));
    }, []);

    return (
        <Context.Provider value={{ classDispatcher, studentDispatcher }}>
            <div className="main-container">
                <Header />

                <div className="selectors-container">

                    <Select
                        label={'Origem'}
                        helperText={'Selecione um período acadêmico'}
                        value={origin}
                        handleChange={e => handlePeriodChange(e, setOrigin)}
                    />

                    <Select
                        label={'Destino'}
                        helperText={'Selecione um período acadêmico'}
                        value={target}
                        handleChange={e => handlePeriodChange(e, setTarget)}
                        disabled={origin === '' || origin === undefined || origin === false || origin === null}
                    />

                </div>

                <div className="content-container">
                    {
                        classes.map((data, key) =>
                            <Class key={key} {...data}/>
                        )
                    }
                    <div className="submit-container">
                        <Button variant={'contained'} color={'primary'} onClick={handleSubmit}>
                            <TrendingUpIcon/>
                            <p>Migrar</p>
                        </Button>
                    </div>
                </div>

                <Footer />

            </div>
        </Context.Provider>
    )
}

export default Home;