import React from 'react';
import styled from "styled-components";
import TicketFiltersContainer from "../TicketFiltersContainer";
import TicketData from "../TicketDataWrapper";

const Ticket = () => {
    return (
        <TicketWrapper >
            <TicketLeft>
                <TicketFiltersContainer/>
            </TicketLeft>

            <TicketRight>
                <TicketData/>
            </TicketRight>

        </TicketWrapper>
    );
};

const TicketWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 25px;
  justify-content: center;
  position: relative;
  width: 90%;
  margin: auto;
  flex-wrap: wrap;
`
const TicketLeft = styled.div`
    display: flex;
    max-width: 250px;
    flex-direction: column;
    position: relative;
`
const TicketRight = styled.div`
  display: flex;
  flex-grow: 1;
  max-width: 750px;

`

export default Ticket;
