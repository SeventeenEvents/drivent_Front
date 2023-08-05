import styled from 'styled-components';
import HotelsList from '../../../components/Hotel/HotelsList';

export default function Hotel() {
  return (
    <>
      <Title>Escolha de quarto e hotel</Title>
      <Subtitle>Primeiro, escolha seu hotel</Subtitle>
      <HotelsList />
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
`;
