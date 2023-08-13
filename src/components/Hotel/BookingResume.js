import useToken from '../../hooks/useToken';
import styled from 'styled-components';

export default function BookingResume({ userBooking, setUpdateRoomStatus }) {
  const token = useToken();

  function loadResume() {
    if (userBooking.length === 0) {
      return <p>Ainda não há reserva</p>;
    } else {
      return (
        <CardContainer>
          <img src={userBooking.Hotel.image} />
          <div>
            <h4>Quarto reservado:</h4>
            <p>{userBooking.Room.name} (Single)</p>
          </div>
          <div>
            <h4>Pessoas no seu quarto:</h4>
            <p>Você e mais 2</p>
          </div>
        </CardContainer>
      );
    }
  }

  return (
    <BookingContainer>
      <p className="title">Você já escolheu seu quarto:</p>

      {loadResume()}

      <button onClick={() => setUpdateRoomStatus(true)}>TROCAR DE QUARTO</button>
    </BookingContainer>
  );
}

const BookingContainer = styled.div`
  .title {
    color: #8e8e8e;
    font-family: Roboto;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 14px;
  }

  button {
    border-radius: 4px;
    border: none;
    padding: 12px;
    background: #e0e0e0;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.25);

    color: #000;
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
`;

const CardContainer = styled.div`
  width: 196px;
  height: 264px;
  border-radius: 10px;
  background: #ffeed2;
  padding: 15px;
  margin-bottom: 38px;

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
