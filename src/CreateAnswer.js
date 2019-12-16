import React, { useEffect, useState } from "react";
import TextareaAutosize from 'react-textarea-autosize';

import "./CreateAnswer.css";

export default function CreateAnswer(props) {
  const [qboxh, setqboxh] = useState(0);
  const [qboxw, setqboxw] = useState(0);
  const [isEditing, setEdit] = useState(false);
  const [text, setText] = useState('init1');
  const [oldText , setOldText] = useState('');


  useEffect(() => {
    function handleResize() {
      setqboxh(document.getElementById("answerBoxEl").clientHeight);
      setqboxw(document.getElementById("answerBoxEl").clientWidth);
    }

    if(isEditing)
    {
        document.getElementById("textarea").focus();
        
    }else {


        window.addEventListener("resize", handleResize);

        setqboxh(document.getElementById("answerBoxEl").clientHeight);
    
        setqboxw(document.getElementById("answerBoxEl").clientWidth);
    }

    if(text === 'init1') 
    setText(props.text);
    


  }, [qboxh, qboxw , isEditing , props.text , text]);

  if(!isEditing)

  {
    return (
        <div className="container">
          <div id="answerBoxEl" className="answerBox">
            <p>
     {text}
            </p>
            <i
              onClick={() => {
                setOldText(text);
                setEdit(true);
              } }
              style={{ bottom: qboxh - 15, left: qboxw - 45 }}
              className="fa fa-pencil answer"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      );
  }
  else {
    return (
        <div className="container">
          <div id="answerBoxEl" className="answerBox ">
        

          <TextareaAutosize id="textarea" className ="answer textarea" value={text} onChange={(e) => setText(e.target.value)}/>

            <div className="btngrp answer">
            <button className = "button answer" onClick = {() => {
                setEdit(false);
                setText(text);
                props.updateParent(text , props.chno);
                }}>Update</button>
        <button className = "button answer" onClick = {() =>  {
            setText(oldText);
            setEdit(false);

        }}>Discard</button>
            </div>


          </div>
        </div>
      );
  }


  
}
