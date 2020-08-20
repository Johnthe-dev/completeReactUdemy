import React from "react";

export const UserOutput = (props) => {

    return (
        <>
            <div> Username= <input value={props.username} type={'text'} onChange={(event)=>{props.changeHandler('username', event.target.value)}}/></div>
            <div> Adjective= <input value={props.adjective} type={'text'} onChange={(event)=>{props.changeHandler('adjective', event.target.value)}}/></div>
            <div> Adverb= <input value={props.adverb} type={'text'} onChange={(event)=>{props.changeHandler('adverb', event.target.value)}}/></div>
            <div> Verb= <input value={props.verb} type={'text'} onChange={(event)=>{props.changeHandler('verb', event.target.value)}}/></div>
            <div> Noun= <input value={props.noun} type={'text'} onChange={(event)=>{props.changeHandler('noun', event.target.value)}}/></div>

            <p>Hello {props.username}! I welcome you to Virtual Mad Libs!</p>
            <p>Once upon a time, a wild {props.noun} came across a {props.adjective} lion. The {props.noun} felt very {props.adjective}
            himself, so the {props.noun} felt that there was no danger in {props.verb+'ing'} the lion. the {props.noun}
            took several steps back, calmed itss nerves and ran forward to {props.verb} the lion. The lion roared {props.adverb}
            and rand away. </p>
            <p><b>The End</b></p>
        </>
    )
}