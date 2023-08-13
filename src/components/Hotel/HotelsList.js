import styled from 'styled-components';
import { useState } from 'react';
import HotelCard from './HotelCard';
import BookingResume from './BookingResume';
import RoomList from './RoomList';

export default function HotelsList({ hotels }) {
  const [selectedHotel, setSelectedHotel] = useState(null);
  console.log(hotels);
  function toggleHotel(hotelId) {
    if (hotelId === selectedHotel) setSelectedHotel();
    if (hotelId !== selectedHotel) setSelectedHotel(hotelId);
  }

  return (
    <>
      <ListContainer>
        {hotels.map((hotel) => {
          return <HotelCard hotel={hotel} selectedHotel={selectedHotel} toggleHotel={() => toggleHotel(hotel.id)} />;
        })}
      </ListContainer>

      <BookingResume />
      {selectedHotel ? <RoomList selectedHotel={selectedHotel} /> : ''}
    </>
  );
}

const ListContainer = styled.div`
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
`;
