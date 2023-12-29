import React from "react";
import { Link } from "react-router-dom";

function NavbarMenu() {
  return (
    <div style={{ backgroundColor: "#f8f9fa", padding: "10px" }}>
      <div style={{ margin: "0 auto", maxWidth: "960px" }}>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          SpaceTravels Hub
        </Link>
        <input type="checkbox" id="navbar-toggle-cbox" />
        <label htmlFor="navbar-toggle-cbox">&#9776; Menu</label>
        <div id="navbar-items" style={{ float: "right" }}>
          <Link to="/Category" style={{ marginLeft: "20px", textDecoration: "none", color: "black" }}>
            Rockets
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavbarMenu;
