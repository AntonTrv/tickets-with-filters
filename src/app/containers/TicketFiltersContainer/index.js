import React from "react";
import styled from "styled-components";
import CurrencyFilter from "../../components/Currency";
import StopsFilter from "../../components/Stops";


const TicketFiltersContainer = () => {
    return (
        <FiltersContainer>
            <div>
                <CurrencyFilter/>
                <StopsFilter/>
            </div>
        </FiltersContainer>
    )
}

export default  TicketFiltersContainer;


const FiltersContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  margin-right: 10px;
  position: sticky;
  top: 25px;
  
`
