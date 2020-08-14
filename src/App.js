import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

// function App() {
//   return (
//     <div className="App">
//       <h1>Hi! I'm a ReactApp</h1>
//     </div>
//   );
// }
class App extends Component {
    state = {
        persons:[
            {name:'Johnny', age:31},
            {name:'James', age:33},
            {name:'Jared', age:29}]
    }
    changeNameHandler = () => {
        console.log('was clicked');
    }

    render() {
        return (
            <div className='App'>
                <h1>Hi I'm a React App</h1>
                <button onClick={this.changeNameHandler}>Switch Name</button>
                <p>This is working for shizzle.</p>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>
                    <p>Hobbies: Racing</p>
                </Person>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
                    <p>Hobbies: Running</p>
                </Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>
                    <p>Hobbies: Boating</p>
                </Person>
            </div>
        )
          }
}
export default App;
