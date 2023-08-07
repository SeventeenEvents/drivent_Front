import styled from 'styled-components';
import RoomCard from './RoomCard';
import { useState } from 'react';

export default function RoomList({ rooms }) {
  const [selectedRoom, setSelectedRoom] = useState();

  function toggleRoom(roomId) {
    if (roomId === selectedRoom) setSelectedRoom(null);
    if (roomId !== selectedRoom) setSelectedRoom(roomId);
  }

  return (
    <>
      <Subtitle>Ótima pedida! Agora escolha seu quarto:</Subtitle>
      <ListContainer>
        {rooms.map((room) => {
          return <RoomCard room={room} selectedRoom={selectedRoom} toggleRoom={() => toggleRoom(room.id)} />;
        })}
      </ListContainer>
    </>
  );
}

const ListContainer = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Subtitle = styled.h2`
  color: #8e8e8e;
  font-size: 20px;
  line-height: 24px;
  padding: 15px 0px;
`;
