import React from "react";
import "../styles.css";

export default function Card(props){
    return(
        <div className="card">
            <h1>{props.person.name}</h1>
            <h1>{props.person.location}</h1>
        </div>
    )
}