import styled from 'styled-components';
import { FaUserAlt } from 'react-icons/fa';

export default function RoomCard({ room, selectedRoom, toggleRoom }) {
  //substituir 101 pelo id do quarto
  return (
    <ContainerCard selectedRoom={room.id === selectedRoom} onClick={() => toggleRoom(room.id)}>
      <RoomNumber>{room.name}</RoomNumber>
      <div>
        <FaUserAlt />
        <FaUserAlt />
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
