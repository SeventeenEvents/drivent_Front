import styled from 'styled-components';
import chipIcon from '../../../assets/images/sim-card.png';
import { BsFillCircleFill } from 'react-icons/bs';
import { FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';
export default function PaymentProcess() {
  const [pay, setPay] = useState(false);
  return (
    <TicketTypeContainer>
      <h1>Ingresso e pagamento</h1>
      <CardToChoice>
        <h3>Ingresso escolhido</h3>
        <CardContainer>
          <Card className='card_background'>
            <h2>Presencial + com Hotel</h2>
            <h3>Valor do ingresso</h3>
          </Card>
        </CardContainer>
      </CardToChoice>

      <CardForm onSubmit={(e) => {e.preventDefault(); setPay(true); toast.success('Pagamento Realizado');}}>
        <h3>Pagamento</h3>
        
        { !pay?
          <PaymentContainer>
            <CreditCard>
              <ChipContainer>
                <img src={chipIcon} alt='chip'/>
              </ChipContainer>

              <NumbersCard>
                <p>
                  <BsFillCircleFill/>
                  <BsFillCircleFill/>
                  <BsFillCircleFill/>
                  <BsFillCircleFill/>
                </p>
                <p>
                  <BsFillCircleFill/>
                  <BsFillCircleFill/>
                  <BsFillCircleFill/>
                  <BsFillCircleFill/>
                </p>
                <p>
                  <BsFillCircleFill/>
                  <BsFillCircleFill/>
                  <BsFillCircleFill/>
                  <BsFillCircleFill/>
                </p>
                <p>
                  <BsFillCircleFill/>
                  <BsFillCircleFill/>
                  <BsFillCircleFill/>
                  <BsFillCircleFill/>
                </p>
              </NumbersCard>
              <NameCardContainer>
                <h2>YOUR NAME HERE</h2>
                <article>
                  <p>VALID THRU</p>
                  <p className='date_card'>
                    <BsFillCircleFill/>
                    <BsFillCircleFill/>
                  /
                    <BsFillCircleFill/>
                    <BsFillCircleFill/>
                  </p>
                </article>
              </NameCardContainer>
            </CreditCard>

            <CardInputs>
              <input title='Insira o número do seu cartão de crédito' type='text' name='cardNumber' placeholder='Card Number' required/>
              <p>E.g.: 49...,51...,36...,37...</p>
              <input name='name' title='Nome do proprietário do cartão de crédito' type='text' placeholder='Name' required/>
              <article>
                <input title='Insira a data de validade do seu cartão' name='validThru' type='text' maxlength="5" pattern="\d{2}/\d{2}" placeholder='Valid Thru' required/>
                <input title='Insira o código de verificação do cartão' name='cvc' type='number' placeholder='CVC' required/>
              </article>
            </CardInputs>

          </PaymentContainer> 
          :''
        }

        { !pay?
          <CardContainer className='margin_top'>
            <FinishButton type='submit'>FINALIZAR PAGAMENTO</FinishButton>
          </CardContainer>
          :''
        }
        { pay?
          <ConfirmedPayment>
            <article>
              <FaCheckCircle/>
            </article>
            <div>
              <h2>Pagamento confirmado!</h2>
              <h3>Prossiga para escolha de hospedagem e atividades</h3>
            </div>
          </ConfirmedPayment>
          :''
        }

      </CardForm>

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
const CardForm = styled.form`
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
  .margin_top{
    margin-top: 15px;
  }

`;
const CardContainer = styled.div`
  display: flex;
  gap: 24px;
`;
const PaymentContainer = styled.form`
  width: 706px;
  height: 225px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CreditCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  justify-content: space-between;
  border: none;
  height: 100%;
  width: 49%;
  background-color: #757575;
  padding: 15px 20px;
`;

const CardInputs = styled.form`
  height: 100%;
  width: 49%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  input{
    color: #111;
    font-size: 16px;
    font-weight: 700;
    box-sizing: border-box;
    padding: 5px 10px;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    border:1px solid #ABABAB;
  }
  input::placeholder{
    color: #ABABAB;
    font-size: 15px;
    font-weight: 500;
  }
  p{
    color: #ABABAB;
    text-align: left;
    width: 100%;
  }

  article{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
  }
`;
const ChipContainer = styled.div`
  display: flex;
  align-self: self-start;
  height: 50px;
  width: 100%;

  img{
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
const NumbersCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p{
    color: #FFF;
    font-size: smaller;
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

const NameCardContainer = styled.div`
  display:flex;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  color: #C3C3C3;
  h2{
    color: #C3C3C3;
    font-family: cursive;
    word-spacing: 10px;
  }
  article{
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: x-small;
    line-height: 15px;
    letter-spacing: 2px;
    .date_card{
      display: flex;
      gap: 3px;
    }
  }
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
const FinishButton = styled.button`
    width: 182px;
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
const ConfirmedPayment = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  

  color: #454545;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  article{
    font-size: 44px;
    color: #36B853;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div{
    width: 100%;
    h3{
      color: #454545;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;
