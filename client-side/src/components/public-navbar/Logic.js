import React from "react";
import { useLocation } from "react-router-dom";

function Logic() {
  const { pathname } = useLocation();
  const navLinkStylesFirst = ({ isActive }) => {
    if (pathname !== "/") {
      isActive = false;
    }
    return {
      color: isActive ? "white" : "rgb(51,102,51)",
      background: isActive ? "rgb(51,102,51)" : "white",
    };
  };

  const navLinkStyles = (props) => {
    return {
      color: props.isActive ? "white" : "rgb(51,102,51)",
      background: props.isActive ? "rgb(51,102,51)" : "white",
    };
  };

  return {
    navLinkStylesFirst,navLinkStyles
  };
}

export default Logic;
