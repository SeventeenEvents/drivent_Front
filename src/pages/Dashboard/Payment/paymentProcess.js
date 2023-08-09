import styled from 'styled-components';
import PaymentForm from '../../../components/Dashboard/Payment/paymentForm';

export default function PaymentProcess({ ticket }) {
  return (
    <TicketTypeContainer>
      <h1>Ingresso e pagamento</h1>
      {
        ticket?
          <>
            <CardToChoice>
              <h3>Ingresso escolhido</h3>
              <CardContainer>
                <Card className='card_background'>
                  <h2>
                    {
                      (!ticket.TicketType.isRemote&&ticket.TicketType.includesHotel)?
                        'Presencial + com Hotel':
                        (!ticket.TicketType.isRemote&&!ticket.TicketType.includesHotel)?
                          'Presencial sem Hotel'
                          :'Online'
                    }
                  </h2>
                  <h3>R$ {ticket.TicketType.price}</h3>
                </Card>
              </CardContainer>
            </CardToChoice>

            <PaymentForm ticket={ticket}/>
          </>
          :
          <CardToChoice>
            <CardContainer>
              <h2>Reserve um Ticket Primeiro</h2>
            </CardContainer>
          </CardToChoice>
      }

    </TicketTypeContainer>
  ); 
}

const TicketTypeContainer = styled.main`
  font-family: 'Roboto', sans-serif;
  width: 100%;
  height: inherit;

  h1{
    font-size: 34px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
  }

  .card_background{
    background-color: #FFEED2;
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
  
  border-radius: 20px;
  width: 290px;
  height: 108px;
  border: 1px solid #CECECE;

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

