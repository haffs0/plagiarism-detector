import React, {Fragment} from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";
import { isAuthenticated, signout } from  "../api/auth-helper";

const activeStyle = {
  color: "#349eeb",
  marginBottom: "0",
  borderBottom: "2px solid #349eeb",
  paddingBottom: "16px"
}

const Navbar = (props) => {
 
  const handleLogout = () => signout()

  return (
    <>
      <NavBar>
        <FlexContainer>
        <NavLinks>
        {isAuthenticated() ? (
          <Fragment>
            <li><NavLink to="/essay-list" activeStyle={activeStyle}>Compare</NavLink></li>
            <li><NavLink to="/" onClick={handleLogout}>Logout</NavLink></li>
          </Fragment>
        ) : null}
        </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
    </>
  );
};

Navbar.propTypes = {
  handleNavbar: PropTypes.func.isRequired,
  navbarState: PropTypes.bool.isRequired
};

export default Navbar;

const NavBar = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 1;
  font-size: 1.4rem;
  border-bottom: 1px solid #e6ebf0;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height: 5rem;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  margin-top: 15px;
  display: grid;
  grid-template-columns: 10fr 1fr;
  & a {
    color: #5f6368;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    text-decoration: none;
    cursor: pointer;
    display: none;

    @media screen and (min-width: 768px) {
      display: inline-block;
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 768px) {
    display: none;
  }
`;