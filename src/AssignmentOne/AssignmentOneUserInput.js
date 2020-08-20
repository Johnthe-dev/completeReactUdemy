import React, {useState} from "react";
import {UserOutput} from "./AssignmentOneUserOutput";

export const UserInput = () => {
    const [values, setValues] = useState({
        username: 'Username',
        adjective: 'Adjective',
        adverb: 'Adverb',
        verb: 'Verb',
        noun: 'Noun'
    });
    const informationChangeHandler = (type, value) => {
            setValues({...values, [type]: value});
    }

    return (
        <UserOutput changeHandler={informationChangeHandler} username={values.username} adjective={values.adjective}
                    adverb={values.adverb} noun={values.noun} verb={values.verb}>
        </UserOutput>
    )
}