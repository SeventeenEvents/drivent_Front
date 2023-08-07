import styled from 'styled-components';
import RoomCard from './RoomCard';

export default function RoomList({ rooms }) {
  return (
    <>
      <Subtitle>Ótima pedida! Agora escolha seu quarto:</Subtitle>
      <ListContainer>
        {rooms.map((room) => {
          return <RoomCard room={room}/>;
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
