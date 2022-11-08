import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpCase = () => {
    setText(text.toLocaleUpperCase());
    props.showAlert('Converted to uppercase', 'success');
  };
  
  const handleLoCase = () => {
    setText(text.toLowerCase());
    props.showAlert('Converted to lowercase', 'success');
  };
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  
  const handleCopy = ()=>{
    let myBox = document.getElementById('myBox');
    navigator.clipboard.writeText(myBox.value);
    props.showAlert('Copied to clipboard', 'success');
  }
  
  const handleClear = ()=>{
    setText('');
    props.showAlert('Text cleared', 'success');
  }
  
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(' '))
    props.showAlert('Extra spaces removed', 'success');
  }

  return (
    <>
      <div className="mb-3 my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>{props.heading}</h2>
        <textarea
          className="form-control"
          id="myBox"
          rows="6"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode==='dark'?'rgb(50 110 158)':'white', color: props.mode==='dark'?'white':'black'}}
        ></textarea>
        <button disabled={text.length===0} style={{borderRadius: 15}} className="btn btn-success my-2 mx-1" onClick={handleUpCase}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} style={{borderRadius: 15}} className="btn btn-success my-2 mx-1" onClick={handleLoCase}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} style={{borderRadius: 15}} className="btn btn-success my-2 mx-1" onClick={handleClear}>
          Clear Text
        </button>
        <button disabled={text.length===0} style={{borderRadius: 15}} className="btn btn-success my-2 mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} style={{borderRadius: 15}} className="btn btn-success my-2 mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>

      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summery</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length * 0.008} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
      </div>
    </>
  );
}
