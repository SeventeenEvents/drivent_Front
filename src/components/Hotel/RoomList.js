import styled from 'styled-components';
import RoomCard from './RoomCard';
import { useState, useEffect } from 'react';
import useToken from '../../hooks/useToken';
import axios from 'axios';

export default function RoomList({ selectedHotel, selectedRoom, setSelectedRoom }) {
  console.log('entrou no room list e o hotel selecionado é ', selectedHotel);
  const token = useToken();
  const [roomData, setRoomData] = useState();
  useEffect(() => {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const hotelWithRooms = axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/hotels/${selectedHotel}`, headers)
      .then((res) => {
        console.log(res);
        setRoomData(res.data.Rooms);
      })
      .catch((error) => console.log(error));
  }, []);

  function toggleRoom(roomId) {
    if (roomId === selectedRoom) setSelectedRoom(null);
    if (roomId !== selectedRoom) setSelectedRoom(roomId);
    console.log('Hotel selecionado: ' + selectedHotel + 'Quarto selecionado' + selectedRoom);
  }

  return (
    <>
      <Subtitle>Ótima pedida! Agora escolha seu quarto:</Subtitle>
      <ListContainer>
        {roomData
          ? roomData.map((room) => {
            return <RoomCard room={room} selectedRoom={selectedRoom} toggleRoom={() => toggleRoom(room.id)} />;
          })
          : 'Hotel sem quartos!'}
      </ListContainer>
    </>
  );
}

const ListContainer = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Subtitle = styled.h2`
  color: #8e8e8e;
  font-size: 20px;
  line-height: 24px;
  padding: 15px 0px;
`;
