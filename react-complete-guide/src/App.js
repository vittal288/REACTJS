import React, { Component } from 'react';
// here React is complete class but Component is object or constant 
// import Radium, {StyleRoot} from 'radium';

import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:'adasd', name: 'Vittal', age: 28 },
      { id:'24eds',name: 'Sandy', age: 29 },
      { id:'eqweqew',name: 'Harsha', age: 30 }
    ],
    showPersons: false,
    'someOtherState': 'Some Other state'
  };
  // react will pass the event object to this method 
  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex((person)=>{
      // if(person.id === id) {
      //   return person['id']
      // }
      return person.id === id;
    });

    // find out exact object needs to be update and create a copy of it to avoid mutating original state using spread operator 
    const person = {...this.state.persons[personIndex]};
    // OR
    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    // create ad copy of original person array 
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons:persons});
  };

  tooglePersonHandler = () => {
    //DO NOT use this way to update/mutate the state of react component 
    //this.state.persons[1].name ='Vittal Kamkar', instead use setState method
    
    
    this.setState({
      showPersons: !this.state.showPersons
    })
  };

  deletePersonHandler = (personIndex) =>{
    // this following method as flaw, because ARRAY and OBJECT are reference type or pointer 
    // --> so in below line of code we mutating the original array of persons by updating the same, hence we are updating the state of react component, supposedly we should not  
    // --> to avoid mutating, we have to create copy of persons, as shown in 2nd approach('New Method')


    // const persons = this.state.persons;
    // persons.splice(personIndex, 1);
    // console.log('Orginal Person array' , this.state.persons);
    // this.setState({
    //   persons:persons
    // });



    // @@@ New method 
    // const persons  = this.state.persons.slice();// ES 5, to copy or clone the array 
    const persons = [...this.state.persons]; // ES 6 , spread operator will spread through each array item and bind it into new array []
    persons.splice(personIndex,1);
    // console.log('Orginal Person array' , this.state.persons);
    this.setState({persons:persons});
  }

  // whenever state updates, react will re render this method 
  render() {
    let persons = null;
    let btnClass = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person 
                      click={ () => this.deletePersonHandler(index)}
                      name={person.name} 
                      age={person.age}
                      key={person.id}//key is default keyword accept by react component to identify unique of it for virtual DOM
                      changeCustomName={(event)=>this.nameChangedHandler(event, person.id)}/>
          })}        
        </div>
      );      

      btnClass = classes.Red;
    }


    // dynamically adding classes
    const assignedClasses =[];
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red) // classes =['red]
    }
    if(this.state.persons.length <=1){
      assignedClasses.push(classes.bold) // classes =['red','bold]
    }

    return (     
      <div className={classes.App}>
        <h1>I am react App</h1>
        <p className={assignedClasses.join(" ")} >This is really working</p>        
        <button          
          className={btnClass}
          onClick={this.tooglePersonHandler}>Show Persons</button>
          {persons}
      </div>      
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'I am react App'));
  }
}

// wrapping App component to higher level component
// export default Radium(App);
export default App;
