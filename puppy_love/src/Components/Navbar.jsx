import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Navbar = () => {
  const unactive = {
    fontSize: "20px",
    textDecoration: "none",
    color: "#F339AF",
  };
  const activeStyle = {
    fontSize: "30px",
    textDecoration: "none",
    color: "#92045E",
  };
  return (
    <NavbarWrapper>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : unactive)}
      >
        Home
      </NavLink>
      <NavLink
        to="/puppy"
        style={({ isActive }) => (isActive ? activeStyle : unactive)}
      >
        Puppy
      </NavLink>
      <NavLink
        to="/search"
        style={({ isActive }) => (isActive ? activeStyle : unactive)}
      >
        Search
      </NavLink>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.div`
  height: 80px;
  width: 100%;
  position: sticky;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight:900;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;
