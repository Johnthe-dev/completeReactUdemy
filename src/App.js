import React, {Component, useState} from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
    const [personsState, setPersonsState] = useState({
        persons: [
            {name: 'John', age: '31'},
            {name: 'Yvette', age: '31'},
            {name: 'Jessica', age: '28'}
        ],
        otherState: 'Other value here'
    });
    console.log(personsState);
    const switchNameHandler = (name) => {
        setPersonsState({
                persons: [
                    {name: name, age: '29'},
                    {name: 'James', age: '33'},
                    {name: 'Joy', age: '27'}
                ]
            }
        )
    }
    const nameChangedHandler = (event) => {
        setPersonsState({
                persons: [
                    {name: 'John', age: '29'},
                    {name: event.target.value, age: '33'},
                    {name: 'Joy', age: '27'}
                ]
            }
        )
    }
    return (
        <div className='App'>
            <h1>Hi I'm a React App</h1>
            <button onClick={() => {
                switchNameHandler('George')
            }}>Switch Name
            </button>
            <p>This is working for shizzle.</p>
            <Person
                name={personsState.persons[0].name}
                age={personsState.persons[0].age}>
                <p>Hobbies: Racing</p>
            </Person>
            <Person
                nameChanger={nameChangedHandler}
                click={switchNameHandler.bind('name', 'Paul')}
                name={personsState.persons[1].name}
                age={personsState.persons[1].age}>
                <p>Hobbies: Running</p>
            </Person>
            <Person
                name={personsState.persons[2].name}
                age={personsState.persons[2].age}>
                <p>Hobbies: Boating</p>
            </Person>
        </div>
    )

}
export default App;
