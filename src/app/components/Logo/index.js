import React from 'react';
import styled from "styled-components";
import {nanoid} from "nanoid";





const Logo = ({logo}) => {

    return (
        <LogoWrapper>
            <img src={`/assets/img/${logo}.png`} alt="logo"/>
        </LogoWrapper>
    );

};



const LogoWrapper = styled.div`
  padding: 10px 15px;
  margin: auto;
  max-width: 200px;
  padding-bottom: 25px;
  
  img {
    width: 100%;
    height: auto;
  }
`
export default Logo;
