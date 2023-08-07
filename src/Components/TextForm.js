import React,{useState} from 'react'

export default function TextForm(props) {
  const UpperCaseClick=()=>{
    setText(text.toUpperCase());
  }
  const LowerCaseClick=()=>{
    setText(text.toLowerCase());
  }
  const SpeakonClick=()=>{
    var msg = new SpeechSynthesisUtterance();
    msg.text=text;
    speechSynthesis.speak(msg);
  }
  const ClearText=()=>{
    setText('');
  }
  const handlechange=(event)=>{
    console.log("on change");
    setText(event.target.value);
  }
  const[text,setText]=useState("enter your text");
  return (
    <>
    <div >
      <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
    <div className="mb-3"  style={{backgroundColor:props.mode==='dark'?'grey':'white'}}>
    <textarea className="form-control"  id="myBox" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} value={text} rows="8" onChange={handlechange}></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={UpperCaseClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={LowerCaseClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={SpeakonClick}>Listen</button>
    <button className="btn btn-primary mx-2" onClick={ClearText}>Clear Text</button>
    </div>
    <div className="container my-3"  style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'}}>
      <h3>Your text summary here</h3>
      <p>{text.split(' ').filter(text=>text!== '').length} words and {text.length} characters</p>
      <p>{0.008*text.split(' ').filter(text=>text!== '').length} minutes to read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
