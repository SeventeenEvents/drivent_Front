import styled from 'styled-components';
import { FaUserAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import useToken from '../../hooks/useToken';
import axios from 'axios';
import { BiUser } from 'react-icons/bi';

export default function RoomCard({ room, selectedRoom, toggleRoom }) {
  const token = useToken();
  const [roomBookings, setRoomBookings] = useState();
  //substituir 101 pelo id do quarto
  useEffect(() => {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    if (selectedRoom) {
      const response = axios
        .get(`${process.env.REACT_APP_API_BASE_URL}/booking/room/${selectedRoom}`, headers)
        .then((res) => {
          console.log('use efect do room cardddd');
          console.log('entrou no room list e o quarto selecionado é ', selectedRoom);
          console.log(res.data);
          setRoomBookings(res.data);
        })
        .catch((error) => console.log(error));
    }
  }, [selectedRoom]);
  return (
    <ContainerCard selectedRoom={room.id === selectedRoom} onClick={() => toggleRoom(room.id)}>
      <RoomNumber>{room.name}</RoomNumber>
      <div>
        <BiUser />
        <BiUser />
      </div>
    </ContainerCard>
  );
}

const ContainerCard = styled.div`
  width: 190px;
  height: 45px;
  border-radius: 10px;
  border: 1px solid #cecece;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: ${({ selectedRoom }) => (selectedRoom ? '#ffeed2' : '#ebebeb')};

  div {
    display: flex;
    gap: 3px;
    font-size: 22px;
    svg:first-child {
      color: ${({ selectedRoom }) => (selectedRoom ? 'hotpink' : 'inherit')};
    }
  }
`;

const RoomNumber = styled.p`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
`;
