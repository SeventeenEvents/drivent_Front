import styled from 'styled-components';
import { useState } from 'react';
import HotelCard from './HotelCard';
import BookingResume from './BookingResume';

export default function HotelsList({ hotels }) {
  const [selectedHotel, setSelectedHotel] = useState();

  function toggleHotel(hotelId) {
    if (hotelId === selectedHotel) setSelectedHotel(null);
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
    </>
  );
}

const ListContainer = styled.div`
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
`;
