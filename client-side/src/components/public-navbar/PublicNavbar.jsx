import React from "react";
import { Navlink } from "react-router-dom";
import { PublicNavbarContainer, Links } from "./components";

function PublicNavbar() {
  return (
    <PublicNavbarContainer>
      <img src="" />

      <Links>
        <Navlink to="/">Home</Navlink>

        <Navlink to="/about">About</Navlink>

        <Navlink to="/contact">Contact</Navlink>
      </Links>
    </PublicNavbarContainer>
  );
}

export default PublicNavbar;
