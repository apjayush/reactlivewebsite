import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  // text= "newtext" wrong way to change text
  // setText("new text is here") correct way to change text
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleDownClick = () => {
    setText(text.toLowerCase());
  };

  const Clear = () => {
    setText("");
  };

  const Remove = () =>{
    setText(text.trim());
  }

  const CopyToClipboard = () => {
    const content = document.getElementById("myBox");
    content.select();
    console.log(content);
    console.log(content.value);
    navigator.clipboard.writeText(content.value);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div>
        <div>
          <h2>{props.heading} </h2>
          <div className="mb-2">
            <label htmlFor="myBox" className="form-label"></label>
            <textarea
              className="form-control "
              value={text}
              onChange={handleOnChange}
              id="myBox"
              rows="10"
              style={{
                backgroundColor: props.mode === "light" ? "white  " : "grey",
                color: props.mode === "light" ? "black  " : "white",
              }}
            ></textarea>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-3 my-3"
          onClick={handleUpClick}
        >
          Convert to uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-3"
          onClick={handleDownClick}
        >
          Convert to lowercase
        </button>
        <button type="button" className="btn btn-primary mx-3" onClick={Clear}>
          Clear text
        </button>

        <button
          type="button"
          className="btn btn-primary mx-3"
          onClick={CopyToClipboard}
        >
          Copy
        </button>
        <button type="button" className="btn btn-primary mx-3" onClick={Remove}>
          Trim
        </button>
      </div>

      <div className="container">
        <h3>Your text summary</h3>
        <p>
          This text has {text.length} characters and {text.split(" ").length}{" "}
          words
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter text to preview it here"}</p>
      </div>
    </>
  );
}
