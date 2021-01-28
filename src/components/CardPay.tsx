import React from "react";
import styled, { css } from "styled-components";
import { PayForm } from "./PayForm";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 250px;
  background-color: #c4b2a9;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const CardHeader = styled.header`
  padding-bottom: 32px;
`;

const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

const CardPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid true;
`

const CardName = styled.div`
  float: left;
`;

const CardButton = styled.button`
float: right;
width: 25%;
font-family: inherit;
font-size: 14px;
font-weight: 700;
color: blue;
border-color: blue;
box-shadow: 0 10px 10px rgb(0 0 0 / 8%);
cursor: pointer;
-webkit-transition: all 0.25s cubic-bezier(0.02,0.01,0.47,1);
transition: all 0.25s cubic-bezier(0.02,0.01,0.47,1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

const CardPay: React.FC<Props> = ({ card }) => {
  return (
    <Wrapper>
      <CardWrapper>
        <CardHeader>
          Select the amount to donate
        </CardHeader>
        <CardBody>
          <PayForm />
        </CardBody>
      </CardWrapper>
    </Wrapper>
  )
}

export default CardPay