import styled from 'styled-components';
import { useState, useEffect } from 'react';
import HotelCard from './HotelCard';
import BookingResume from './BookingResume';
import RoomList from './RoomList';
import useToken from '../../hooks/useToken';
import axios from 'axios';

export default function HotelsList({ hotels }) {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const token = useToken();
  const [selectedRoom, setSelectedRoom] = useState();
  const [userBooking, setUserBooking] = useState([]);
  console.log('Hotel selecionado: ' + selectedHotel + 'Quarto selecionado' + selectedRoom);

  function toggleHotel(hotelId) {
    if (hotelId === selectedHotel) setSelectedHotel();
    if (hotelId !== selectedHotel) setSelectedHotel(hotelId);
    console.log('Hotel selecionado: ' + selectedHotel + 'Quarto selecionado' + selectedRoom);
  }
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/booking`, headers)
      .then((res) => {
        setUserBooking(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  function sendBooking() {
    const body = {
      roomId: selectedRoom,
      hotelId: selectedHotel,
    };

    const promise = axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/booking`, body, headers)
      .then(() => {
        alert('Reserva de quarto efetuada com sucesso!');
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <>
      {userBooking.length === 0 ? (
        <div>
          <Subtitle>Primeiro, escolha seu hotel</Subtitle>
          <ListContainer>
            {hotels.map((hotel) => (
              <HotelCard
                key={hotel.id}
                hotel={hotel}
                selectedHotel={selectedHotel}
                toggleHotel={() => toggleHotel(hotel.id)}
              />
            ))}
          </ListContainer>
        </div>
      ) : (
        <BookingResume userBooking={userBooking} setUserBooking={setUserBooking} />
      )}

      {selectedHotel && (
        <RoomList selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} selectedHotel={selectedHotel} />
      )}

      {selectedRoom != null && selectedHotel != null && (
        <SendBookingButton onClick={sendBooking}>RESERVAR QUARTO</SendBookingButton>
      )}
    </>
  );
}

const ListContainer = styled.div`
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const SendBookingButton = styled.button`
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
  margin-top: 46px;
`;

const Subtitle = styled.h2`
  color: #8e8e8e;
  font-size: 20px;
  line-height: 24px;
  padding: 15px 0px;
`;
