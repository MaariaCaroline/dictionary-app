import React from "react";
import "./Meaning.css"

export default function Meaning(props) {
    return  (
        <div className="Meaning">
        <h2>{props.meaning.partOfSpeech}</h2>
        {props.meaning.definition.map(function (definition, index) { 
            return (
            <div key={index}>
<div className="definition">{definition.definition}</div>

<div className="example">{definition.example}</div>
            
            </div>
        ); 
        })}
        </div> );

}