import React from "react";

const Person = (props) => {
    return (
        <>
            <p>I'm a Person named {props.name} who is {props.age} years old</p>
            {props.children}
        </>
    )
};
export default Person;