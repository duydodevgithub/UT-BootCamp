import React from "react";

const Navpills = props =>
  <ul className="nav nav-tabs">
    <li
      onClick={() => props.handlePageChange("Home")}
      className={props.currentPage === "Home" ? "active" : ""}
    >
      <a>Home</a>
    </li>
    <li
      onClick={() => props.handlePageChange("About")}
      className={props.currentPage === "About" ? "active" : ""}
    >
      <a>About</a>
    </li>
    <li
      onClick={() => props.handlePageChange("Blog")}
      className={props.currentPage === "Blog" ? "active" : ""}
    >
      <a>Blog</a>
    </li>
    <li
      onClick={() => props.handlePageChange("Contact")}
      className={props.currentPage === "Contact" ? "active" : ""}
    >
      <a>Contact</a>
    </li>
  </ul>;

export default Navpills;
