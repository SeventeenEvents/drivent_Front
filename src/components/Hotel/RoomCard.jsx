import styled from 'styled-components';
import { FaUserAlt } from 'react-icons/fa';

export default function RoomCard({ room }) {
  //substituir 101 pelo id do quarto
  return (
    <ContainerCard>
      <RoomNumber>101</RoomNumber>
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

  div{
    display:flex;
    gap: 3px;
    font-size:22px;
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
