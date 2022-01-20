import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let uppercaseText = text.toUpperCase();
    setText(uppercaseText);
    props.handleAlert("converted to uppercase", "success")

  };

  const handleLowerClick = () => {
    let lowerCaseText = text.toLowerCase();
    setText(lowerCaseText);
    props.handleAlert("converted to lowercase", "success")
  };

  const handleClearClick = () => {
    let clearText = "";
    setText(clearText);
    props.handleAlert("cleared the text", "success")

  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(""));
    props.handleAlert("extra space has been removed now", "success")
  };

  const handleCopyClick = () => {
    let text = document.getElementById("box-value");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.handleAlert("text has been copied", "success")
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="box-value"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            rows="10"
          ></textarea>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleLowerClick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleClearClick}>
            Clear Text
          </button>
          <button className="btn btn-primary mx-2" onClick={handleCopyClick}>
            Copy Text
          </button>
          <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
            Remove Extra Space
          </button>
        </div>
      </div>

      <div className="container my-4">
        <h2>The text's summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to Read.</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Enter something for a preview'}</p>
      </div>
    </>
  );
}
