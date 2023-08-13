import styled from 'styled-components';
import HotelsList from '../../../components/Hotel/HotelsList';
import { useEffect, useState } from 'react';
import useToken from '../../../hooks/useToken';
import axios from 'axios';

export default function Hotel() {
  const token = useToken();
  const [hotels, setHotels] = useState([]);
  const [includesHotel, setIncludesHotel] = useState(true);
  const [ticketPaid, setTicketPaid] = useState(true);

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const hotelsList = axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/hotels`, headers)
      .then((res) => {
        setHotels(res.data);
        console.log(hotels);
      })
      .catch((error) => {
        if (error.response && error.response.status === 402) setTicketPaid(false);
        if (error.response && error.response.status === 404) setIncludesHotel(false);
        console.log(error.message);
      });
    console.log(hotelsList);
  }, [token]);

  if (!ticketPaid) {
    return (
      <>
        <Title>Escolha de quarto e hotel</Title>
        <Subtitle>Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem</Subtitle>
      </>
    );
  }
  if (!includesHotel) {
    return (
      <>
        <Title>Escolha de quarto e hotel</Title>
        <Subtitle>Sua modalidade de ingresso não inclui hospedagem. Prossiga para a escolha de atividades</Subtitle>
      </>
    );
  }

  return (
    <>
      <Title>Escolha de quarto e hotel</Title>
      <HotelsList hotels={hotels} />
    </>
  );
}

const Subtitle = styled.h2`
  color: #8e8e8e;
  font-size: 20px;
  line-height: 24px;
  padding: 15px 0px;
`;
const Title = styled.h1`
  color: #000;
  font-family: Roboto;
  font-size: 34px;
  font-weight: 400;
  margin-bottom: 36px;
`;
