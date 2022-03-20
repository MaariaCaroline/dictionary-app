import React from "react";
import "./Meaning.css"
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    return  (
        <div className="Meaning">
        <h2>{props.meaning.partOfSpeech}</h2>
        {props.meaning.definitions.map(function (definition, index) { 
            return (
            <div key={index}>
                <p>
<strong>Definition</strong> {definition.definition}
<br />

<strong>Example</strong>{definition.example}
   </p> 
   <p><Synonyms synonyms={definition.synonyms}/>

       </p>        
            </div>
        ); 
        })}
        </div> );

}