import styled from 'styled-components';
import exampleImage from '../../assets/images/hotel-example.png';

export default function HotelCard({ name, image, type, availability }) {
  return (
    <CardContainer>
      <img src={exampleImage} alt={name} />
      <h3>{name}</h3>
      <div>
        <h4>Tipos de acomodação:</h4>
        <p>{type}</p>
      </div>
      <div>
        <h4>Vagas disponíveis:</h4>
        <p>{availability}</p>
      </div>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  width: 196px;
  height: 264px;
  border-radius: 10px;
  background: #ebebeb;
  padding: 15px;

  img {
    border-radius: 5px;
    width: 168px;
    height: 109px;
  }
  h3 {
    color: #343434;
    font-family: Roboto;
    font-size: 20px;
    font-weight: 400;
    padding: 10px 0px;
  }
  h4 {
    padding-top: 15px;
    color: #3c3c3c;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 700;
  }
  p {
    color: #3c3c3c;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 400;
  }
`;
