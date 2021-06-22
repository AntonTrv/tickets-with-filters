import React from 'react';
import styled from "styled-components"

const Header = () => {
    return (
        <HeaderWrapper>
            <img src="./assets/img/logo.png" alt="logo"/>
        </HeaderWrapper>
    );
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;  
  img{
    height: auto;
    padding-bottom: 20px;
  }
`
