import React, { useReducer, useState, useEffect } from 'react';

import Student from './student';
import Class from './class';
import Header from './header';
import Footer from './footer';
import Select from './inputs/select';
import Loading from './loading';
import Modal from './modal';

import Button from '@material-ui/core/Button';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

import studentReducer from '../reducers/studentReducer';
import classReducer from '../reducers/classReducer';
import originReducer from '../reducers/originReducer';
import targetReducer from '../reducers/targetReducer';

import { add as addClass, reset as resetClasses } from '../actions/classActions';
import { add as addOrigin } from '../actions/originActions';
import { add as addTarget } from '../actions/targetActions';

import { useGET } from '../hooks/api';

const URL = 'http://localhost:3001/';

export const Context = React.createContext();

const Home = () => {

    const [options, setOptions] = useState([]);
    const [open, setOpen] = useState(false);

    const [origin, originDispatcher] = useReducer(originReducer, '');
    const [target, targetDispatcher] = useReducer(targetReducer, '');
    const [classes, classDispatcher] = useReducer(classReducer, []);
    const [students, studentDispatcher] = useReducer(studentReducer, []);

    const [ isLoadingOption, dataFetchedOptions ] = useGET(URL + 'periods');

    const handleSubmit = async() => {
        const data = { students, origin, target };
        const init = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        };
        const url = URL + 'migrate';
        const response = await fetch(url, init);
        setOpen(true);
        console.log(response);
    }

    const filterTarget = (period) => {
        if(!isNaN(period)) {
            return period % 2 === 0 ? 'even' : 'odd'
        }
    }

    useEffect(() => {

        setOptions(dataFetchedOptions);

        if (origin) {

            fetch(URL + `studentsClass?period=${origin}`)
                .then(data => data.json())
                .then( records => {
                    const data = records.data.reduce( (accumulator, current) => {
                        const {
                            ClassId,
                            ClassName,
                            CourseId,
                            CourseName,
                            PeriodId,
                            PeriodName,
                            StudentId,
                            StudentName,
                            StudentClassId: id
                        } = current;

                        if (accumulator[ClassName] === undefined) {
                            accumulator[ClassName] = {
                                id: id,
                                title: CourseName,
                                subtitle: ClassName,
                                courseId: CourseId,
                                classId: ClassId,
                                periodId: PeriodId,
                                periodName: PeriodName,
                                list: [Student({
                                    name: StudentName,
                                    id: StudentId,
                                    courseId: CourseId,
                                    classId: ClassId,
                                    periodId: PeriodId,
                                    studentClassId: id,
                                })]
                            }
                        } else {
                            accumulator[ClassName] = {
                                ...accumulator[ClassName],
                                list: [
                                    ...accumulator[ClassName].list,
                                    Student({
                                        name: StudentName,
                                        id: StudentId,
                                        courseId: CourseId,
                                        classId: ClassId,
                                        periodId: PeriodId,
                                        studentClassId: id,
                                    })
                                ]
                            }
                        }
                        return accumulator;
                    }, {})
                    classDispatcher(resetClasses());
                    Object.keys(data).forEach( key => {
                        classDispatcher(addClass(data[key]));
                    });
                });
        }
    }, [dataFetchedOptions, origin]);

    if(isLoadingOption) {
        return (
            <div className="main-container">
                <Header></Header>
                <div className="selectors-container">
                    <Loading />
                </div>
                <Footer></Footer>
            </div>
        )
    }

    return (
        <Context.Provider value={{ classDispatcher, studentDispatcher }}>
            <div className="main-container">
                <Header />
                <Modal
                    open={open}
                    handleClose={() => {
                        window.location.reload(false);
                        setOpen(!open)
                    }}
                />
                <div className="selectors-container">

                    <Select
                        label={'Origem'}
                        helperText={'Selecione um período acadêmico'}
                        value={origin}
                        add={(id) => originDispatcher(addOrigin(id))}
                        options={options}
                    />

                    <Select
                        label={'Destino'}
                        helperText={'Selecione um período acadêmico'}
                        value={target}
                        add={(id) => targetDispatcher(addTarget(id))}
                        disabled={origin === '' || origin === undefined || origin === false || origin === null}
                        options={options.filter(({ Id }) => {
                            return (
                                filterTarget(Id) === filterTarget(origin)
                                &&
                                Id !== origin
                            )})
                        }
        />

                </div>

                <div className="content-container">
                    {
                        classes.map((data, key) =>
                            <Class key={key} {...data}/>
                        )
                    }
                    <div className="submit-container">
                        <Button
                            variant={'contained'}
                            color={'primary'}
                            onClick={handleSubmit}
                            disabled={target === '' || target === undefined || target === false || target === null}
                        >
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