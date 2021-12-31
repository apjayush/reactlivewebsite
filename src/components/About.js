import { getByTitle } from "@testing-library/dom";
import React, { useState } from "react";

export default function About(props) {

    const [myText, setmyText] = useState("Enable dark mode")

  const [Style, setStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const toggle = () => {
    if (Style.color === "black") {
      setStyle({
        color: "white",
        backgroundColor: "black",
        border: "0.5px solid white"
      });
      setmyText("Enable light mode")
    } else {
      setStyle({
        color: "black",
        backgroundColor: "white",
      });
       setmyText("Enable dark mode");
    }
  };

  return (
    <div className="container my-3" style={Style}>
      <div className="accordion" id="accordionExample" style={Style}>
        <div className="accordion-item" style={Style}>
          <h2 className="accordion-header" id="headingOne" style={Style}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={Style}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
            style={Style}
          >
            <div className="accordion-body" style={Style}>
              <strong>This is the first item's accordion body.</strong> It is
             
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={Style}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={Style}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
            style={Style}
          >
            <div className="accordion-body" style={Style}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
            
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={Style}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={Style}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
            style={Style}
          >
            <div className="accordion-body" style={Style}>
              <strong>This is the third item's accordion body.</strong> It is
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="btn btn-primary my-3" onClick={toggle}>
        {myText}
      </button>
    </div>
  );
}
