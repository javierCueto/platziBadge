import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";

import "./global.css";
//import Badge from "./components/Badge";
import BadgeNew from "./pages/BadgeNew"

const container = document.getElementById("app");

ReactDOM.render(
  /*<Badge
    firstName="Javier"
    lastName="Cueto"
    avatar="https://gravatar.com/avatar?d=identicon"
    jobTitle="Software Enginner"
    twitter="@JJavierCueto"
  />*/
  <BadgeNew></BadgeNew>
  
  ,
  container
);
