import { useState } from 'react';
import styled from 'styled-components';
import PaymentProcess from './paymentProcess';
import useTickets from '../../../hooks/api/useTickets';
export default function Payment() {
  const [choices, setChoices] = useState({
    ticketType: '',
    isHotel: null,
    reservedTicket: false,
    ticketId: 0,
  });
  const { ticketType } = useTickets();

  if (!choices.reservedTicket) {
    return (
      <TicketTypeContainer>
        <h1>Ingresso e pagamento</h1>
        <CardToChoice>
          <h3>Primeiro, escolha sua modalidade de ingresso</h3>
          <CardContainer>
            { ticketType?.map((ticket) => (
              <Card key={ticket.id} className={choices.ticketType==='presencial' && ticket.id === choices.ticketId?'card_background':''} onClick={() => {setChoices({ ...choices, ticketType: 'presencial', ticketId: ticket.id }); console.log(ticketType);}}>
                <h2>{ticket.name}</h2>
                <h3>R$ {ticket.price}</h3>
              </Card>
            ))
            }
          </CardContainer>
        </CardToChoice>
  
        {
          choices.ticketType==='presencial' ?
            <CardToChoice>
              <h3>Ótimo! Agora escolha sua modalidade de hospedagem</h3>
              <CardContainer>
                <Card className={choices.isHotel===false?'card_background':''} onClick={() => {setChoices({ ...choices, isHotel: false }); console.log(choices);}}>
                  <h2>Sem Hotel</h2>
                  <h3>+ R$ 0</h3>
                </Card>
                <Card className={choices.isHotel===true?'card_background':''} onClick={() => {setChoices({ ...choices, isHotel: true }); console.log(choices);}}>
                  <h2>Com Hotel</h2>
                  <h3>+ R$ 350</h3>
                </Card>
              </CardContainer>
            </CardToChoice>
            : ''
        }
        {
          choices.isHotel !== null||choices.ticketType==='online' ?
            <CardToChoice>
              <h3>Fechado! O total ficou em R$ {choices.ticketType==='online'?100:choices.isHotel===true?600:250}. Agora é só confirmar:</h3>
              <CardContainer>
                <FinishButton onClick={() => {setChoices({ ...choices, reservedTicket: true }); console.log(choices);}}>RESERVAR INGRESSO</FinishButton>
              </CardContainer>
            </CardToChoice>
            : ''
        }    
      </TicketTypeContainer>
    );
  }
  return(
    <PaymentProcess/>
  );
}

const TicketTypeContainer = styled.main`
    font-family: 'Roboto', sans-serif;
    //border: 1px solid red;
    width: 100%;
    height: inherit;

    .card_background{
      background-color: #FFEED2;
    }

    h1{
      font-size: 34px;
      font-weight: 400;
      line-height: 40px;
      letter-spacing: 0em;
      text-align: left;
    }
    
`;
const CardToChoice = styled.div`
  margin-top: 37px;
  display: flex;
  flex-direction: column;
  gap: 17px;
  h3{
      color: #8E8E8E;
      font-size: 20px;
      font-weight: 400;
      line-height: 23px;
      letter-spacing: 0em;
      text-align: left;
    }
`;
const CardContainer = styled.div`
  display: flex;
  gap: 24px;
`;
const Card = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  width: 145px;
  height: 145px;
  border-radius: 20px;
  border: 1px solid #CECECE;

  :hover{
    background-color: #FFEED2;
  }

  h2{
    color: #454545;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  h3{
    color: #898989;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const FinishButton = styled.button`
    width: 170px;
    height: 37px;

    border: none;
    border-radius: 4px;
    background: #E0E0E0;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.25);
  
    color: #000;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `;
