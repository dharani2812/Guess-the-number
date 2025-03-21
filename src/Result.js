import React from "react";
import './Result.css';

function Result({secretnum,number}){
let Result;
if(number){
    if(number > secretnum){
        Result = "Higher";
    }
    else if(number < secretnum){
        Result = "Lower";
    }
    else if(number == secretnum){
        Result = "Awesome ! You are Correct ";
    }
    else{
        Result = "Enter a Valid Value "
    }
}
    
    return(
        <h2>You Guessed : {Result}</h2>
    )
}

export default Result;