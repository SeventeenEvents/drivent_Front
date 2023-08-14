import styled from 'styled-components';
import { useEffect, useState } from 'react';
import useToken from '../../hooks/useToken';
import axios from 'axios';

export default function HotelCard({ hotel, toggleHotel, selectedHotel }) {
  const token = useToken();
  const [capacity, setCapacity] = useState();
  const [roomsData, setRoomsData] = useState([]);
  const [accommodationsTypes, setAccommodationsTypes] = useState([]);

  useEffect(() => {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const hotelRooms = axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/hotels/${hotel.id}`, headers)
      .then((res) => {
        setRoomsData(res.data.Rooms);
        setCapacity(getHotelCapacity(res.data.Rooms));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <CardContainer selectedHotel={hotel.id === selectedHotel} onClick={() => toggleHotel(hotel.id)}>
      <img src={hotel.image} alt={'exampleimage'} />
      <h3>{hotel.name}</h3>
      <div>
        <h4>Tipos de acomodação:</h4>
        <p>Single</p>
      </div>
      <div>
        <h4>Vagas disponíveis:</h4>
        <p>2</p>
      </div>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  width: 196px;
  height: 264px;
  border-radius: 10px;
  background: ${({ selectedHotel }) => (selectedHotel ? '#ffeed2' : '#ebebeb')};
  padding: 15px;
  cursor: pointer;

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

function getHotelCapacity(roomsList) {
  let capacity = 0;
  if (!roomsList || !roomsList.length) return capacity;
  roomsList.forEach((room) => (capacity += room.capacity));
  return capacity;
}

function getTypes(roomsList) {
  let types = [];
  if (!roomsList || !roomsList.length) return types;
  roomsList.forEach((room) => { });
}
