import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";



const Essay = ({
  name,
  essay
}) => (
  <Wrapper>
    <div className="container">
      <h4><b>{name}</b></h4>
      <p>{essay}</p>
    </div>
  </Wrapper>
);

Essay.propTypes = {
  name: PropTypes.string.isRequired,
  essay: PropTypes.string.isRequired
};

export default Essay;

const Wrapper = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  & .container {
    padding: 10px 16px;
  }
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  p {
    font-size: 1em;
    color: #5f6368;
  }
  h4 {
    font-size: 2em;
    color: #5f6368;
  }
`;