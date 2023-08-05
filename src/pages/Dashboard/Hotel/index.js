import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserContext from '../../../contexts/UserContext';
import { useContext } from 'react';

export default function Hotel() {
  const { userData } = useContext(UserContext);
  const { token } = userData;
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const [ticketData, setTicketData] = useState([]);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }; 

  console.log(ticketData);
  
  useEffect(() => {
    axios.get(`${BASE_URL}tickets`, config).then((response) => {
      setTicketData(response.data);
    }).catch((error) => {
      console.log(error.message);
    });
  }, []);

  function verifyUserTicketStatus() {
    if(ticketData.status === 'PAID') {
      return 'Listando hoteis ..';
    } else if (ticketData.status === 'RESERVED')  {
      return 'Pagamento pendente. Finalize o pagamento para poder acessar os hotéis disponíveis.';
    } else if (ticketData.length === 0) {
      return 'Ainda não há inscrição em nenhum evento.';
    }
  }

  return (
    <>
      {verifyUserTicketStatus()}
    </>
  );
}
