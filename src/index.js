import React from "react";
import ReactDOM from "react-dom";

const img = "https://source.unsplash.com/random";
ReactDOM.render(
  <div>
    <h1 className="heading">The Best Dogs</h1>
    <img alt"random src={img}></img>
  </div>,
  document.getElementById("root")
);
