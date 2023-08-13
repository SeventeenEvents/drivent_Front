import styled from 'styled-components';
import { useState, useEffect } from 'react';
import HotelCard from './HotelCard';
import BookingResume from './BookingResume';
import RoomList from './RoomList';
import useToken from '../../hooks/useToken';
import axios from 'axios';
import { toast } from 'react-toastify';
import { set } from 'date-fns';

export default function HotelsList({ hotels }) {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const token = useToken();
  const [selectedRoom, setSelectedRoom] = useState();
  const [userBooking, setUserBooking] = useState([]);
  const [bookingChange, setBookingChange] = useState(false);
  const [updateRoomStatus, setUpdateRoomStatus] = useState(false);

  function toggleHotel(hotelId) {
    if (hotelId === selectedHotel) setSelectedHotel();
    if (hotelId !== selectedHotel) setSelectedHotel(hotelId);
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
  }, [bookingChange]);

  function sendBooking() {
    const body = {
      roomId: selectedRoom,
      hotelId: selectedHotel,
    };

    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/booking`, body, headers)
      .then(() => {
        toast.success('Reserva de quarto efetuada com sucesso!');
        setBookingChange(true);
        setUpdateRoomStatus(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function updateBooking() {
    const body = {
      roomId: selectedRoom,
      hotelId: selectedHotel,
    };

    axios
      .put(`${process.env.REACT_APP_API_BASE_URL}/booking/${userBooking.id}`, body, headers)
      .then(() => {
        toast.success('Reserva de quarto atualizada com sucesso!');
        setBookingChange(true);
        setUpdateRoomStatus(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  console.log('Reservas: ' + userBooking.length + 'Atualizando reserva: ' + updateRoomStatus);

  return (
    <>
      {userBooking.length === 0 || updateRoomStatus ? (
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
          {selectedHotel && (
            <RoomList selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} selectedHotel={selectedHotel} />
          )}

          {selectedRoom != null && selectedHotel != null && updateRoomStatus === false ? (
            <SendBookingButton onClick={sendBooking}>RESERVAR QUARTO</SendBookingButton>
          ) : (
            <UpdateBookingButton onClick={updateBooking}>ALTERAR RESERVA</UpdateBookingButton>
          )}
        </div>
      ) : (
        <BookingResume userBooking={userBooking} setUpdateRoomStatus={setUpdateRoomStatus} />
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

const UpdateBookingButton = styled.button`
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
