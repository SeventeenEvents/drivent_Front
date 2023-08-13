import styled from 'styled-components';
import { useState } from 'react';
import HotelCard from './HotelCard';
import BookingResume from './BookingResume';
import RoomList from './RoomList';
import useToken from '../../hooks/useToken';
import axios from 'axios';

export default function HotelsList({ hotels }) {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const token = useToken();
  const [selectedRoom, setSelectedRoom] = useState();
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

  function sendBooking() {
    const body = {
      roomId: selectedRoom,
      hotelId: selectedHotel
    };

    const promise = axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/booking`, body, headers)
      .then(() => { alert('Reserva de quarto efetuada com sucesso!'); })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <>
      <ListContainer>
        {hotels.map((hotel) => {
          return <HotelCard hotel={hotel} selectedHotel={selectedHotel} toggleHotel={() => toggleHotel(hotel.id)} />;
        })}
      </ListContainer>

      {/* <BookingResume /> */}
      {selectedHotel ? (
        <RoomList selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} selectedHotel={selectedHotel} />
      ) : (
        ''
      )}

      {(selectedRoom != null && selectedHotel != null) ? (
        <SendBookingButton onClick={sendBooking}>RESERVAR QUARTO</SendBookingButton>
      ) : (
        ''
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
