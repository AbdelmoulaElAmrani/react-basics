import React from 'react';
import Style from "./cockpit.module.css";


const cockpit = (props) => {
    const classes = [];
    let btnClass = Style.button;


    if (props.showPersons){
         btnClass = [Style.button , Style.red].join(' ');
    }
    if (props.persons.length <= 2){
        classes.push(Style.red)
    }
    if (props.persons.length <= 1) {
        classes.push(Style.bold)
    }
    return(
        <>
            <h1>Hello</h1>
            <p className={classes.join(' ')}>list of persons</p>
            <button
            className={btnClass}
            onClick={props.clicked}>toggle persons </button>
            <button onClick={props.login}>Login</button>
        </>
    )
};

export default cockpit;