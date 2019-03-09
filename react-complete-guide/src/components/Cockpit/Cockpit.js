import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) =>{
    // dynamically adding classes
    let btnClass = '';
    const assignedClasses =[];

    if(props.persons.length <= 2){
      assignedClasses.push(classes.red) // classes =['red]
    }
    if(props.persons.length <=1){
      assignedClasses.push(classes.bold) // classes =['red','bold]
    }
    
    if(props.showPersons){
        btnClass = classes.Red;
    }

    return (
        <div className={classes.Cockpit}>
            <h1>I am react App</h1>
            <p className={assignedClasses.join(" ")} >This is really working</p>        
            <button          
                className = {btnClass}
                onClick   = {props.clickEvent}>Show Persons
            </button>
        </div>   
    )   
}

export default cockpit;