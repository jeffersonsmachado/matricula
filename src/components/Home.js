import React from 'react';
import List from './list';
import Class from './class';
import Student from './student';
import Select from './inputs/select';

const Home = () => {

    const student1 = Student({ id: 1, name: 'John Doe' });
    const student2 = Student({ id: 2, name: 'Jane Doe' });
    const student3 = Student({ id: 3, name: 'Cloe Doe' });
    const student4 = Student({ id: 4, name: 'Doug Doe' })

    const class1 = Class({ 
        title: 'Português',
        subtitle: 'Turma P-1',
        list: [ student1, student2 ]
    });

    const class2 = Class({
        title: 'Matemática',
        subtitle: 'Turma M-1',
        list: [ student3, student4 ]
    });

    return (
        <div className="main-container">

            <div id="header">
                <h1>HEADER</h1>
            </div>

            <div className="selectors-container">
                <Select label={'Origem'} helperText={'Selecione um período acadêmico'}/>
                <Select label={'Destino'} helperText={'Selecione um período acadêmico'} />
            </div>

            <div className="content">
                    <List classList={[class1, class2]} />
            </div>
            
            <div id="footer">
                <h1>FOOTER</h1>
            </div>
        </div>
    )
}

export default Home;