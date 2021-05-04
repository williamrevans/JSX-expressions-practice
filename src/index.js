//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDOM from "react-dom";

const currentTime = new Date();

const name = "Will";
const lastName = "Evans";
const thisYear = currentTime.getFullYear();

ReactDOM.render(
  <div>
    <p>
      Created by {name} {lastName}
    </p>
    <p>Copyright {thisYear}</p>
  </div>,
  document.getElementById("root")
);
