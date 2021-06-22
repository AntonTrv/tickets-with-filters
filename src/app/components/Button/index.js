import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";

const Button = ({price}) => {
    const {currency} = useSelector(state => state.tickets)

    return (
        <ButtonElement>
            Купить  <span> за {`${Math.ceil(price*currency.rate)} ${currency.symbol}`}</span>
        </ButtonElement>
    );
};

const ButtonElement = styled.button`
  background-color: #FF6D00;
  padding: 10px 15px;
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  outline: none;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  max-width: 200px;
  font-size: 1rem;
  
  span {
  padding-top: 5px;
  }
  
  &:hover {
      background-color: #FF8124;

  }
`

export default Button;
