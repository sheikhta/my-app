import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick=() =>{
        console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick=() =>{
        console.log("Uppercase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick=() =>{
       // console.log("Uppercase was clicked"+ text);
        let newText = '';
        setText(newText);
    }
    
   const capitalizeFirst = () => {
    const lower = text.toLowerCase();
    let capitalizedText = text.charAt(0).toUpperCase() + lower.slice(1);
    setText(capitalizedText);
  }
  

  const reversed = () => {
    let splitWord = text.split("");

    let reverseWord = splitWord.reverse("");
    let joinedWords = reverseWord.join("");
    let newText = joinedWords

    setText(newText);
  }
  const replaceString=()=>{
    let repval=prompt("Enter the word to be replaced:")
    let tobereplaced= new RegExp(repval,'g');

    let toreplace=prompt("Enter the text that you want to replace with:");
    
    let newText= text.replace(tobereplaced,toreplace);
    setText(newText);
  }
  const handleRemoveClick = () => {
    let puncs = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    let result = text.replace(puncs, '');
    let newText = result;
    setText(newText)
}
const handleNewLineRmClick = () => {
    let someText = text.replace(/(\n|\r)/gm, "");
    let newText = someText;
    setText(newText)
}
const handleNumRmClick = () => {
    let num = text.replace(/[0-9]/g, "");
    let newText = num;
    setText(newText)
}
const handleRmSpcaesClick = () => {
    let space = text.replace(/\s\s/g, "");
    let newText = space;
    setText(newText)
}
const handleCopy = () => {
   var text = document.getElementById("myBox");
   text.select();
   navigator.clipboard.writeText(text.value);
}



    const handleOnChange=(event) =>{
        console.log("Uppercase clicked");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    //wrong way to set text 
    //text="newtext";
    //correct way to set text
   // setText=("new text");
   let myStyle={
    color:'red',
    backgroundColor:'blue'
}
    return (
        <>
    <div className="container my-3" style={myStyle}>
     <h1>{props.heading}</h1>
<div className ="container mb-3">
  
  <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>

 
</div>
<div className="container my-3"> 
<button type="button mx-2" className="btn btn-outline-warning mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
<button type="button mx-2" className="btn btn-outline-warning mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
<button className="btn btn-outline-warning mx-2" onClick={handleRmSpcaesClick}>Remove Extra Spaces </button>
<button type="button mx-2" className="btn btn-outline-warning mx-2" onClick={capitalizeFirst}>Capitalize first Letter</button>

</div>
 <div className="container my-3">

 
<button type="button mx-2" className="btn btn-outline-warning mx-2" onClick={replaceString}>Replace string</button>
<button className="btn btn-outline-warning mx-2" onClick={handleRemoveClick}>Remove Punctuations </button>
 <button className="btn btn-outline-warning mx-2" onClick={handleNewLineRmClick}>Remove New Line </button>
 <button className="btn btn-outline-warning mx-2" onClick={handleNumRmClick}>Remove Numbers </button>
 <button type="button mx-2" className="btn btn-outline-warning mx-2" onClick={reversed}>Reverse</button>

 </div>
<div className="container my-3">

<button type="button mx-2" className="btn btn-outline-danger mx-2" onClick={handleClearClick}>Clear text</button>
<button type="button mx-2" className="btn btn-outline-danger mx-2" onClick={handleCopy}>Copy text</button>
</div>
 
                




    </div>
    <div className="container my-3" style={{color: props.mode=== 'dark'?'white':'black'}}>
        <h1>Text Summary</h1>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
  )
}
