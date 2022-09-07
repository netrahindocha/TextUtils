import { useState } from "react"
import React from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success");
    }
    
    const handleAa = ()=>{
        let words = text.split(/\s+/);
        let joinedWords = [];
        let capWord;
        
        words.forEach(function (element){
            if(element[0] !== undefined){
                capWord = element[0].toUpperCase() + element.slice(1).toLowerCase();
                joinedWords += capWord + ' '; 
            }
        });
        setText(joinedWords);
        props.showAlert("Converted first letter of each word to Capital!", "success");
    }
    const handleReset = ()=>{
        setText("");
        props.showAlert("Text Cleared!", "success");
    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }
    const handleOnChange = (e)=>{
        setText(e.target.value);
    }
    const handleExtraSpaces = ()=>{
        let words = text.split(' ');
        let joinedWords = '';
        words.forEach((elem)=>{
            if(elem[0] !== undefined){
                joinedWords += elem + " ";
            }
        })
        setText(joinedWords);
        props.showAlert("Extra spaces removed!", "success");
    }
    

    // text = "new text"; // wrong way to change the state
    // setText("new text"); // correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'? 'white' : 'black'}}>
                <h1>{props.heading}</h1>
                <div className="form-group">
                    <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8" style={{backgroundColor: props.mode === 'dark'? '#141619' : 'white', color: props.mode === 'dark'? 'white' : 'black'}}></textarea>
                    <div className="buttons my-2 mx-2">
                    <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                    <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleAa}>Aa</button>
                    <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleReset}>Clear</button>
                    <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleCopy}>Copy</button>
                    <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                    </div>
                </div>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'? 'white' : 'black'}}>
            <h2>Your text summary</h2>
            {/* <p>{text.split(" ").includes("")? text.split(" ").length - 1 : text.split(" ").length} words and {text.length} characters</p> */}
            <p>{text.split(/\s+/).filter((elem) => {return elem.length !== 0}).length} words and {text.length} characters</p>
            <p></p>
            <p>{0.008 * text.split(/\s+/).filter((elem) => {return elem.length !== 0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0? text : "Nothing to preview!"}</p>
        </div>
        </>
    )
}
