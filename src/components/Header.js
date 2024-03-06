import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

function Header({ email }) {
  return (
    <div className="header">
      <Link to={""} className="info">
        {email}
      </Link>
      <Link to={"http://localhost:3000/Login"} className="info">
        Logout
      </Link>
    </div>
  );
}

export default Header;
