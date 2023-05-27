import React from "react";

export default function Navbar() {
  return (
    <nav>
      <img src="./plane-solid.svg" className="nav--logo" alt="Airplane" />
      <h3 className="tour--logo">
        {" "}
        <span className="tour-title">Best|</span>Tours
      </h3>
    </nav>
  );
}
