import React from "react";
import { Link } from "react-router-dom";
import { Route, Routes, useNavigate } from "react-router-dom";

function Stupido() {
  const navigate = useNavigate();
  if (localStorage.getItem("isLogged" === "false")) {
    return navigate("/Login");
  } else {
    return <div>Stupido</div>;
  }
}

export default Stupido;
