import React, { Fragment } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { isAuthenticated, signout } from  "../api/auth-helper"


const activeStyle = {
  color: "#349eeb",
  marginBottom: "0",
  paddingBottom: "16px"
}

const CollapseMenu = (props) => {

  const handleLogout = () => signout()
  
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200]
        }).interpolate((openValue) => `translate3d(0, ${openValue}px, 0`)
      }}
      >
      <NavLinks>
      {isAuthenticated() ? (
        <Fragment>
          <li><NavLink to="/essay-list" activeStyle={activeStyle}>Compare</NavLink></li>
          <li><NavLink to="/" onClick={handleLogout}>Logout</NavLink></li>
        </Fragment>
      ) : null}
      </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

CollapseMenu.propTypes = {
  handleNavbar: PropTypes.func.isRequired,
  navbarState: PropTypes.bool.isRequired
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: black;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
`;

const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;
  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
  }
`;