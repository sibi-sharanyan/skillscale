import React, { useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

import "./CreateQuestion.css";

export default function CreateQuestion(props) {
  const [qboxh, setqboxh] = useState(0);
  const [qboxw, setqboxw] = useState(0);
  const [isEditing, setEdit] = useState(false);
  const [text, setText] = useState(
   props.text
  );
  const [oldText, setOldText] = useState("");

  useEffect(() => {
    function handleResize() {
      setqboxh(document.getElementById("questionBoxEl").clientHeight);
      setqboxw(document.getElementById("questionBoxEl").clientWidth);
    }

    if (isEditing) {
      document.getElementById("textarea").focus();
    } else {
      window.addEventListener("resize", handleResize);

      setqboxh(document.getElementById("questionBoxEl").clientHeight);

      setqboxw(document.getElementById("questionBoxEl").clientWidth);
    }
  }, [qboxh, qboxw, isEditing]);

  if (!isEditing) {
    return (
      <div className="container">
        <div id="questionBoxEl" className="questionBox">
          <p>{text}</p>
          <i
            onClick={() => {
              setOldText(text);

              setEdit(true);
            }}
            style={{ bottom: qboxh - 20, left: qboxw - 70 }}
            className="fa fa-pencil"
            aria-hidden="true"
          ></i>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div id="questionBoxEl" className="questionBox ">
          <TextareaAutosize
            id="textarea"
            value={text}
            onChange={e => setText(e.target.value)}
          />

          <div className="btngrp">
            <button
              onClick={() => {
                setEdit(false);
                setText(text);
                props.updateParent(text , 'qn');
              }}
            >
              Update
            </button>
            <button
              onClick={() => {
                setText(oldText);
                setEdit(false);
              }}
            >
              Discard
            </button>
          </div>
        </div>
      </div>
    );
  }
}
