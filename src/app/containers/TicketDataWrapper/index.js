import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useActions} from "../../redux/store/actionCreators";
import {useSelector} from "react-redux";
import Logo from "../../components/Logo";
import {nanoid} from "nanoid";
import Button from "../../components/Button";


const TicketData = () => {

    const {fetchTickets} = useActions()
    const {tickets, filters} = useSelector(state => state.tickets)

    const days = ["Пн","Вт","Ср","Чт","Пт","Сб","Вс",]
    const months = ["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек",]

    useEffect(() => {
        fetchTickets(filters)
    }, [filters])

    const toLocalDate = (date) => {
        let fullDate = new Date(date)
        const current = `${fullDate.getDate()} ${months[fullDate.getMonth()]} ${fullDate.getFullYear()}, ${days[fullDate.getDay()]} `
        return current
    }

    return (
        <TicketDataWrapper>
            {tickets.map(ticket =>
                <Ticket key={nanoid()}>

                    <ButtonLogoWrapper>
                        <Logo logo={ticket.carrier}/>
                        <Button price={ticket.price}/>
                    </ButtonLogoWrapper>

                    <TicketCardsWrapper>
                        <LeftCard>
                            <time>{ticket.departure_time}</time>
                            <p>{ticket.origin}, {ticket.origin_name}</p>
                            <span>{toLocalDate(ticket.departure_date)}</span>
                        </LeftCard>

                        <CenterCard>
                            <>
                                {ticket.stops === 0 && <span>Прямой</span>}
                                {ticket.stops === 1 && <span>{ticket.stops} Пересадка</span>}
                                {(ticket.stops > 1) && <span>{ticket.stops} Пересадки</span>}
                                <img src="./assets/img/flight-icon.png" alt="from-to-icon"/>
                            </>
                        </CenterCard>

                        <RightCard>
                            <time>{ticket.arrival_time}</time>
                            <p>{ticket.destination}, {ticket.destination_name}</p>
                            <span>{toLocalDate(ticket.arrival_date)}</span>
                        </RightCard>
                    </TicketCardsWrapper>
                </Ticket>
            )}
        </TicketDataWrapper>
    );
};

export default TicketData;


const TicketDataWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 100%;
  flex-wrap: wrap;
  
`

const LeftCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`

const RightCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`

const CenterCard = styled.div`
  display: flex;
  flex-direction: column;
  
  & img {
    max-width: 130px;
  }
  
  & span {
    text-align: center;
    padding-bottom: 5px;
  }
`

const Ticket = styled.article`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  margin-bottom: 20px;
  border-radius: 5px;
  flex-wrap: wrap-reverse;
`

const ButtonLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
    padding: 20px;
    border-right: 1px solid #f4f4f4;
`

const TicketCardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
  flex-grow: 1;
  flex-wrap: wrap;
  
  & time {
    font-size: 3rem;
  }
  
  & p {
    font-weight: bold;
    font-size: 1rem;
  }
  
  & span {
    color: silver;
  }
`
