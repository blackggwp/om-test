import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  margin: 1rem;
  color: ${props => (props.main ? "black" : "white")};
  text-align: center;
`;

export default Title;
