import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked : " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLoClick = () => {
    //console.log("Uppercase was clicked : " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower", "success");
  };

  const handleClearClick = () => {
    //console.log("Uppercase was clicked : " + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text has been cleared", "success");
  };

  const handleOnChange = (event) => {
    //console.log("on change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed", "success");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#0D1E2F" }}
      >
        <h1>{props.heading}</h1>
        <div class="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#0D1E2F",
            }}
            id="myBox"
            rows="8"
          ></textarea>
          <button className="btn btn-success my-3" onClick={handleUpClick}>
            Converet to UPPERCASE
          </button>
          <button className="btn btn-success my-3 mx-3" onClick={handleLoClick}>
            Converet to lowercase
          </button>
          <button
            className="btn btn-success my-3 mx-1"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>

          <button className="btn btn-warning my-3 mx-3" onClick={handleCopy}>
            Copy Text
          </button>
          <button
            className="btn btn-danger my-3 mx-1"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
        </div>
      </div>

      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#0D1E2F" }}
      >
        <h2>Your text Summary :</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters.
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read.</p>
        <h2>Preview :</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in above text box to preview."}
        </p>
      </div>
    </>
  );
}
