import React from "react";
import "./Phonetics.css"

export default function Phonetic(props) {
if (props.phonetic.audio) {
    return (
        <div className="Phonetics">
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
                Listen</a>
                <span className="text">{props.phonetic.text}</span>
        </div>
    );
} return null
}