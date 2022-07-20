import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("")

    let handleChange = (e) => {
        setText(e.target.value)
    }

    let handleUppercase = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success");
    }
    let handleLowercase = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowerCase", "success");
    }

    let handleClearText = () => {
        let newText = ("")
        setText(newText)
        props.showAlert("Texts Cleared", "success");
    }

    let handleRevtext = () => {
        setText(text.split('').reverse().join(''));
        props.showAlert("Texts reversed", "success");
    }

    let handleCopy = () => {
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to clipboard", "success");
    }

    let handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra Spaces cleared", "success");
    }

    return (
        <>
            <div>
                <h1 style={{ color: `${props.mode === "dark" ? "white" : "black"}` }}> {props.heading}</h1>
                <div className={`mb-3 my-3  `} >
                    <textarea className="form-control" style={{ backgroundColor: `${props.mode === "dark" ? "black" : "white"}`, color: `${props.mode === "dark" ? "white" : "black"}` }} value={text} placeholder="Write text here..." onChange={handleChange} id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-2" onClick={handleUppercase}>Convert to Uppercase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleLowercase}>Convert to LowerCase</button>

                <button type="button" className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>

                <button type="button" className="btn btn-primary mx-2" onClick={handleRevtext}>Revrse It</button>

                <button type="button" className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>

                <button type="button" className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>

            </div >

            <div className="container my-3">
                <p style={{ color: `${props.mode === "dark" ? "white" : "black"}` }}>{text.split(" ").length} words & {text.length} Characters</p>
                <p style={{ color: `${props.mode === "dark" ? "white" : "black"}` }}>{0.008 * text.split(" ").length} Minute to read</p>

                <h3 style={{ color: `${props.mode === "dark" ? "white" : "black"}` }}>Preview</h3>
                <p style={{ color: `${props.mode === "dark" ? "white" : "black"}` }}>
                    {text.length > 0 ? text : "Enter text in above box to preview it here"}</p>

            </div>

        </>
    )
}
