import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person'

// function App() {
//   return (
//     <div className="App">
//       <h1>Hi! I'm a ReactApp</h1>
//     </div>
//   );
// }
const App = props => {
    const [personsState, setPersonsState] = useState({
        persons: [
            {name: 'John', age:'31'},
            {name: 'Yvette', age:'31'},
            {name: 'Jessica', age:'28'}
        ],
        otherState: 'Other value here'
    });
        return (
            <div className='App'>
                <h1>Hi I'm a React App</h1>
                <button onClick={this.changeNameHandler}>Switch Name</button>
                <p>This is working for shizzle.</p>
                <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>
                    <p>Hobbies: Racing</p>
                </Person>
                <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>
                    <p>Hobbies: Running</p>
                </Person>
                <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>
                    <p>Hobbies: Boating</p>
                </Person>
            </div>
        )

}
export default App;
