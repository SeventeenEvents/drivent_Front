import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import useToken from '../../../hooks/useToken';

const PaymentForm = ( { ticket } ) => {
  const token = useToken();
  const [pay, setPay] = useState(false);
  
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  async function paymentSubmit(e) {
    e.preventDefault();
    const body = { 
      ticketId: ticket.id,
      cardData: {
        issuer: 'VISA',
        number: state.number,
        name: state.name,
        expirationDate: `${state.expiry.slice(0, 2)}/${state.expiry.slice(-2)}`,
        cvv: state.cvc,
      } 
    };
    console.log(body);
    console.log(token);

    try{
      const response = await api.post('/payments/process', body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPay(true);
      toast.success('Pagamento Realizado');
    }catch(err) {
      toast.error('Pagamento não realizado');
      console.log(err);
    }
  }
  return (
    <PaymentComponentContainer onSubmit={paymentSubmit}>
      <h3>Pagamento</h3>
      { 
        (pay||ticket.status==='PAID')?

          <ConfirmedPayment>
            <article>
              <FaCheckCircle/>
            </article>
            <div>
              <h2>Pagamento confirmado!</h2>
              <h3>Prossiga para escolha de hospedagem e atividades</h3>
            </div>
          </ConfirmedPayment>
          :
          <>
            <PaymentContainer>
              <CreditCard>
                <Cards
                  number={state.number}
                  expiry={state.expiry}
                  cvc={state.cvc}
                  name={state.name}
                  focused={state.focus}
                />
              </CreditCard>
              <CardInputs>
                <input
                  title='Insira o número do seu cartão de crédito'
                  type="number"
                  name="number"
                  placeholder="Card Number"
                  value={state.number}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  required
                />
                <p>E.g.: 49...,51...,36...,37...</p>
                <input 
                  title='Nome do proprietário do cartão de crédito' 
                  name='name' 
                  type='text' 
                  placeholder='Name' 
                  value={state.name}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  required
                />
                <article>
                  <input 
                    title='Insira a data de validade do seu cartão' 
                    name='expiry' 
                    type='number'
                    placeholder='Valid Thru'
                    pattern='\d\d/\d\d'
                    value={state.expiry}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    required
                  />
                  <input 
                    title='Insira o código de verificação do cartão' 
                    name='cvc' 
                    type='number'
                    placeholder='CVC'
                    pattern='\d{3,4}'
                    value={state.cvc}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus} 
                    required
                  />
                </article>

              </CardInputs>

            </PaymentContainer>
            <CardContainer>
              <FinishButton type='submit'>FINALIZAR PAGAMENTO</FinishButton>
            </CardContainer>
          </>
          
      }

    </PaymentComponentContainer>
  );
};

export default PaymentForm;

const PaymentComponentContainer = styled.form`
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

const PaymentContainer = styled.div`
  width: 706px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
`;
const CardContainer = styled.div`
  display: flex;
  gap: 24px;
`;
const CreditCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: none;
  width: 49%;
`;

const CardInputs = styled.div`
  height: 100%;
  width: 49%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;

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
