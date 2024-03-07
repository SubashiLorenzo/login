import React from "react";
import { Link } from "react-router-dom";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Header";
import Homepage from "./Homepage";

function Stupido() {
  const navigate = useNavigate();
  console.log("CANE");
  if (JSON.parse(localStorage.getItem("isLogged") == "true")) {
    navigate("/success");
    console.log(JSON.parse(localStorage.getItem("isLogged")));
  } else {
    navigate("/Login");
  }
  return <Homepage></Homepage>;
}

export default Stupido;
