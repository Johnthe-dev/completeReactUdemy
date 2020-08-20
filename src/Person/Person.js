import React from "react";
import "./Person.css";

const Person = (props) => {
    return (
        <div className={'card'}>
            <p onClick={props.click}>I'm a Person named {props.name} who is {props.age} years old</p>
            {props.children}
            <input type={'text'} onChange={props.nameChanger} value={props.name}/>
        </div>
    )
};
export default Person;