import React from 'react';
import styled from "styled-components";

const Disclaimer = () => {
    return (
        <DisclaimerWrapper>
          <h1>Disclaimer:</h1>
          <p>According to the task, I had to use original tickets.json file with prices in a different currency (RUB instead of actual EUR), I allowed myself to change it because of the free-plan limitations of the API  that I used for currency rates </p>
        </DisclaimerWrapper>
    );
};

const DisclaimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: silver;
  
  & p {
    max-width: 50%;
    text-align: center;
    font-weight: bold;
    line-height: 1.7;
    text-transform: uppercase;
  }
`

export default Disclaimer;
