import React, { useState } from "react";
import { Router } from "react-router";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
export default function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [passwErr, setPasswErr] = useState("");
  let [mailErr, setMailErr] = useState("");
  let [loginClass, setLoginClass] = useState("");
  let [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  window.onstorage = (event) => {
    // identico a window.addEventListener('storage', event => {
  };
  localStorage.setItem(email, password, JSON.stringify(email, password));
  async function onClick() {
    if (email == "") {
      setMailErr("error");
    } else {
      setMailErr("");
    }
    if (password == "") {
      setPasswErr("error");
    } else {
      setPasswErr("");
    }
    if (password != "" && email != "") {
      setLoading(true);
      let res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });
      setLoading(false);
      if (res.status >= 400) {
        setLoginClass("error");
        localStorage.setItem("isLogged", "false");
        navigate("/Login");
      } else {
        setLoginClass("success");
        navigate("/success");
        localStorage.setItem("isLogged", "true");
      }
      let json = await res.json();
      console.log(json);
    }
  }

  return (
    <>
      <Header email={email} />
      <h1>Welcome to a simple Login screen.</h1>
      <div className={"login " + loginClass}>
        <input
          id="login"
          className={mailErr}
          type="email"
          placeholder="email"
          value={email} // passato quando c'è onChange
          onChange={function (e) {
            setEmail(e.target.value); // cambiamo lo stato ad email in modo tale che quando clicco sul campo
            // posso inserire la mail
          }}
        ></input>
        <input
          id="login"
          className={passwErr}
          type="password"
          placeholder="password"
          value={password} // passato quando c'è onChange
          onChange={function (e) {
            setPassword(e.target.value); // cambiamo lo stato a pw in modo tale che quando clicco sul campo
            // posso inserire la pw
          }}
        ></input>
        <button className="login-button" onClick={onClick}>
          LOGIN
        </button>
        {loading && <span>Loading...</span>}
      </div>
    </>
  );
}
