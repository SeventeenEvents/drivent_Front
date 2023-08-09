import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PaymentProcess from './paymentProcess';
import api from '../../../services/api';
import useToken from '../../../hooks/useToken';
import { getPersonalInformations } from '../../../services/enrollmentApi';
import { toast } from 'react-toastify';
import useTicketType from '../../../hooks/api/useTicketType';
import useTicket from '../../../hooks/api/useTicket';
export default function Payment() {
  const token = useToken();
  const data = useTicketType().ticketType;
  const { ticket } = useTicket();

  const [tickets, setTickets] = useState({
    reservedTicket: false,
    selectedTicketId: [], // lista com length = 2; sendo selectedTicketId[0] o id do tipo de ingresso e o selectedTicketId[1] o id do card com hotel ou sem.
    isOnline: null,
    includesHotel: null,
    hasEnrollment: false
  });

  function selectCard(card) {
    if(tickets.isOnline === false) {
      //card presencial sem hotel
      if(!card.isRemote&&!card.includesHotel) return setTickets({ ...tickets, selectedTicketId: [tickets.selectedTicketId[0], card.id], includesHotel: false });
      //card presencial com hotel
      if(!card.isRemote&&card.includesHotel) return setTickets({ ...tickets, selectedTicketId: [tickets.selectedTicketId[0], card.id], includesHotel: true });
    }

    // Card Online
    if(card.isRemote&&!card.includesHotel) return setTickets({ ...tickets, selectedTicketId: [card.id], isOnline: true });
    // Card Presencial
    if(!card.isRemote&&!card.includesHotel) return setTickets({ ...tickets, selectedTicketId: [card.id], isOnline: false });
  }

  function price() {
    //valor online
    if(tickets.isOnline) return data.find(el => el.id === tickets.selectedTicketId[0]).price;
    //valor da diferença de presencia + hotel
    if(tickets.isOnline===false) {
      const priceWithoutHotel = data.find(el => (!el.isRemote&&!el.includesHotel)).price;
      const priceWithHotel = data.find(el => (!el.isRemote&&el.includesHotel)).price;
      return priceWithHotel - priceWithoutHotel;
    }
  }
  useEffect(() => {
    async function checkUserEnrollment() {
      try {
        const personalInformations = await getPersonalInformations(token);
        setTickets({ ...tickets, hasEnrollment: personalInformations !== null });
      } catch (err) {
        console.log(err);
      }
    }

    checkUserEnrollment();
  }, [token]);

  async function reserved(id) {
    const enrrolmentId = await api.get('/enrollments', { headers: { Authorization: `Bearer ${token}` } });

    const body = {
      ticketTypeId: id,
      enrrolmentId: enrrolmentId.data.id,
      status: 'RESERVED'
    };

    console.log(body);

    try {
      const response = await api.post('/tickets', body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success('Ingresso comprado com sucesso!');
    } catch (err) {
      toast.error('Erro ao comprar ingresso');
    }
  }

  if (!tickets.reservedTicket&&ticket===null) {
    return (
      <TicketTypeContainer>
        <h1>Ingresso e pagamento</h1>
        {
          tickets.hasEnrollment ?
            <>
              <CardToChoice>
                <h3>Primeiro, escolha sua modalidade de ingresso</h3>
                <CardContainer>
                  { 
                    data?.filter(t => ((t.isRemote&&!t.includesHotel)||(!t.isRemote&&!t.includesHotel))).map((ticket) => (

                      <Card 
                        key={ticket.id} 
                        onClick={() => selectCard(ticket)}
                        className={tickets.selectedTicketId[0]===(ticket.id)?'card_background':''}
                      >
                        <h2>{ticket.name}</h2>
                        <h3>R$ {ticket.price}</h3>
                      </Card>

                    ))
                  }
                </CardContainer>
              </CardToChoice>
        
              {
                tickets.isOnline === false?
                  <CardToChoice>
                    <h3>Ótimo! Agora escolha sua modalidade de hospedagem</h3>
                    <CardContainer>
                      { 
                        data?.filter(t => ((!t.isRemote&&!t.includesHotel)||(!t.isRemote&&t.includesHotel))).map((ticket) => (

                          <Card
                            key={ticket.id}
                            onClick={() => {selectCard(ticket); }}
                            className={tickets.selectedTicketId[1]===(ticket.id)?'card_background':''}
                          >
                            <h2>{(!ticket.isRemote&&!ticket.includesHotel)?'sem Hotel':'Com Hotel'}</h2>
                            <h3>+ R$ {(!ticket.isRemote&&!ticket.includesHotel)?0:price()}</h3>
                          </Card>

                        ))
                      }
                    </CardContainer>
                  </CardToChoice>
                  :''
              }
        
              {
                tickets.isOnline||tickets.includesHotel !== null?
                  <CardToChoice>
                    <h3>Fechado! O total ficou em R$ {tickets.isOnline?price():data.find(el => (el.id===tickets.selectedTicketId[1])).price}. Agora é só confirmar:</h3>
                    <CardContainer>
                      <FinishButton 
                        onClick={() => {
                          setTickets({ ...tickets, reservedTicket: true });
                          if(tickets.isOnline) {
                            reserved(tickets.selectedTicketId[0]);
                          }
                          reserved(tickets.selectedTicketId[1]);
                        }}
                      >RESERVAR INGRESSO</FinishButton>
                    </CardContainer>
                  </CardToChoice>
                  :''
              }
            </>
            :
            <CardToChoice>
              <h3> Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso </h3>
            </CardToChoice>
        }
           
      </TicketTypeContainer>
    );
  }
  return(
    <PaymentProcess ticket={ticket}/>
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

  /* :hover{
    background-color: #FFEED2;
  } */

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
