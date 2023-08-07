import styled from 'styled-components';
import { useState } from 'react';
import HotelCard from './HotelCard';
import { useEffect } from 'react';
import RoomList from './RoomList';

export default function HotelsList({ hotels }) {
  let hotelsData = [
    {
      id: 1,
      name: 'Luxury Resort',
      image: 'luxury_resort.jpg',
      Rooms: [
        {
          id: 1,
          name: 'Deluxe Suite',
          capacity: 2,
          hotelId: 1,
          createdAt: '2023-08-05T12:00:00Z',
          updatedAt: '2023-08-05T12:00:00Z',
        },
        {
          id: 2,
          name: 'Ocean View Room',
          capacity: 2,
          hotelId: 1,
          createdAt: '2023-08-05T11:30:00Z',
          updatedAt: '2023-08-05T11:30:00Z',
        },
      ],
      createdAt: '2023-08-05T12:00:00Z',
      updatedAt: '2023-08-05T12:00:00Z',
    },
    {
      id: 2,
      name: 'Seaside Paradise',
      image: 'seaside_paradise.jpg',
      Rooms: [
        {
          id: 3,
          name: 'Beachfront Bungalow',
          capacity: 3,
          hotelId: 2,
          createdAt: '2023-08-05T11:30:00Z',
          updatedAt: '2023-08-05T11:30:00Z',
        },
        {
          id: 4,
          name: 'Garden View Room',
          capacity: 2,
          hotelId: 2,
          createdAt: '2023-08-05T10:45:00Z',
          updatedAt: '2023-08-05T10:45:00Z',
        },
      ],
      createdAt: '2023-08-05T11:30:00Z',
      updatedAt: '2023-08-05T11:30:00Z',
    },
    {
      id: 4,
      name: 'City Center Hotel',
      image: 'city_center_hotel.jpg',
      Rooms: [
        {
          id: 6,
          name: 'Standard Room',
          capacity: 2,
          hotelId: 4,
          createdAt: '2023-08-05T09:15:00Z',
          updatedAt: '2023-08-05T09:15:00Z',
        },
        {
          id: 7,
          name: 'Executive Suite',
          capacity: 2,
          hotelId: 4,
          createdAt: '2023-08-05T09:15:00Z',
          updatedAt: '2023-08-05T09:15:00Z',
        },
      ],
      createdAt: '2023-08-05T09:15:00Z',
      updatedAt: '2023-08-05T09:15:00Z',
    },
    {
      id: 1,
      name: 'Luxury Resort',
      image: 'luxury_resort.jpg',
      Rooms: [
        {
          id: 1,
          name: 'Deluxe Suite',
          capacity: 2,
          hotelId: 1,
          createdAt: '2023-08-05T12:00:00Z',
          updatedAt: '2023-08-05T12:00:00Z',
        },
        {
          id: 2,
          name: 'Ocean View Room',
          capacity: 2,
          hotelId: 1,
          createdAt: '2023-08-05T11:30:00Z',
          updatedAt: '2023-08-05T11:30:00Z',
        },
      ],
      createdAt: '2023-08-05T12:00:00Z',
      updatedAt: '2023-08-05T12:00:00Z',
    },
    {
      id: 2,
      name: 'Seaside Paradise',
      image: 'seaside_paradise.jpg',
      Rooms: [
        {
          id: 3,
          name: 'Beachfront Bungalow',
          capacity: 3,
          hotelId: 2,
          createdAt: '2023-08-05T11:30:00Z',
          updatedAt: '2023-08-05T11:30:00Z',
        },
        {
          id: 4,
          name: 'Garden View Room',
          capacity: 2,
          hotelId: 2,
          createdAt: '2023-08-05T10:45:00Z',
          updatedAt: '2023-08-05T10:45:00Z',
        },
      ],
      createdAt: '2023-08-05T11:30:00Z',
      updatedAt: '2023-08-05T11:30:00Z',
    },
    {
      id: 4,
      name: 'City Center Hotel',
      image: 'city_center_hotel.jpg',
      Rooms: [
        {
          id: 6,
          name: 'Standard Room',
          capacity: 2,
          hotelId: 4,
          createdAt: '2023-08-05T09:15:00Z',
          updatedAt: '2023-08-05T09:15:00Z',
        },
        {
          id: 7,
          name: 'Executive Suite',
          capacity: 2,
          hotelId: 4,
          createdAt: '2023-08-05T09:15:00Z',
          updatedAt: '2023-08-05T09:15:00Z',
        },
      ],
      createdAt: '2023-08-05T09:15:00Z',
      updatedAt: '2023-08-05T09:15:00Z',
    },
    {
      id: 1,
      name: 'Luxury Resort',
      image: 'luxury_resort.jpg',
      Rooms: [
        {
          id: 1,
          name: 'Deluxe Suite',
          capacity: 2,
          hotelId: 1,
          createdAt: '2023-08-05T12:00:00Z',
          updatedAt: '2023-08-05T12:00:00Z',
        },
        {
          id: 2,
          name: 'Ocean View Room',
          capacity: 2,
          hotelId: 1,
          createdAt: '2023-08-05T11:30:00Z',
          updatedAt: '2023-08-05T11:30:00Z',
        },
      ],
      createdAt: '2023-08-05T12:00:00Z',
      updatedAt: '2023-08-05T12:00:00Z',
    },
    {
      id: 2,
      name: 'Seaside Paradise',
      image: 'seaside_paradise.jpg',
      Rooms: [
        {
          id: 3,
          name: 'Beachfront Bungalow',
          capacity: 3,
          hotelId: 2,
          createdAt: '2023-08-05T11:30:00Z',
          updatedAt: '2023-08-05T11:30:00Z',
        },
        {
          id: 4,
          name: 'Garden View Room',
          capacity: 2,
          hotelId: 2,
          createdAt: '2023-08-05T10:45:00Z',
          updatedAt: '2023-08-05T10:45:00Z',
        },
      ],
      createdAt: '2023-08-05T11:30:00Z',
      updatedAt: '2023-08-05T11:30:00Z',
    },
    {
      id: 4,
      name: 'City Center Hotel',
      image: 'city_center_hotel.jpg',
      Rooms: [
        {
          id: 6,
          name: 'Standard Room',
          capacity: 2,
          hotelId: 4,
          createdAt: '2023-08-05T09:15:00Z',
          updatedAt: '2023-08-05T09:15:00Z',
        },
        {
          id: 7,
          name: 'Executive Suite',
          capacity: 2,
          hotelId: 4,
          createdAt: '2023-08-05T09:15:00Z',
          updatedAt: '2023-08-05T09:15:00Z',
        },
      ],
      createdAt: '2023-08-05T09:15:00Z',
      updatedAt: '2023-08-05T09:15:00Z',
    },
    {
      id: 1,
      name: 'Luxury Resort',
      image: 'luxury_resort.jpg',
      Rooms: [
        {
          id: 1,
          name: 'Deluxe Suite',
          capacity: 2,
          hotelId: 1,
          createdAt: '2023-08-05T12:00:00Z',
          updatedAt: '2023-08-05T12:00:00Z',
        },
        {
          id: 2,
          name: 'Ocean View Room',
          capacity: 2,
          hotelId: 1,
          createdAt: '2023-08-05T11:30:00Z',
          updatedAt: '2023-08-05T11:30:00Z',
        },
      ],
      createdAt: '2023-08-05T12:00:00Z',
      updatedAt: '2023-08-05T12:00:00Z',
    },
    {
      id: 2,
      name: 'Seaside Paradise',
      image: 'seaside_paradise.jpg',
      Rooms: [
        {
          id: 3,
          name: 'Beachfront Bungalow',
          capacity: 3,
          hotelId: 2,
          createdAt: '2023-08-05T11:30:00Z',
          updatedAt: '2023-08-05T11:30:00Z',
        },
        {
          id: 4,
          name: 'Garden View Room',
          capacity: 2,
          hotelId: 2,
          createdAt: '2023-08-05T10:45:00Z',
          updatedAt: '2023-08-05T10:45:00Z',
        },
      ],
      createdAt: '2023-08-05T11:30:00Z',
      updatedAt: '2023-08-05T11:30:00Z',
    },
    {
      id: 4,
      name: 'City Center Hotel',
      image: 'city_center_hotel.jpg',
      Rooms: [
        {
          id: 6,
          name: 'Standard Room',
          capacity: 2,
          hotelId: 4,
          createdAt: '2023-08-05T09:15:00Z',
          updatedAt: '2023-08-05T09:15:00Z',
        },
        {
          id: 7,
          name: 'Executive Suite',
          capacity: 2,
          hotelId: 4,
          createdAt: '2023-08-05T09:15:00Z',
          updatedAt: '2023-08-05T09:15:00Z',
        },
      ],
      createdAt: '2023-08-05T09:15:00Z',
      updatedAt: '2023-08-05T09:15:00Z',
    },
  ];
  const [selectedHotel, setSelectedHotel] = useState();

  function toggleHotel(hotelId) {
    if (hotelId === selectedHotel) setSelectedHotel(null);
    if (hotelId !== selectedHotel) setSelectedHotel(hotelId);
  }

  return (
    <>
      <ListContainer>
        {hotelsData.map((hotel) => {
          return <HotelCard hotel={hotel} selectedHotel={selectedHotel} toggleHotel={() => toggleHotel(hotel.id)} />;
        })}
      </ListContainer>
      {selectedHotel ? <RoomList rooms={hotels[selectedHotel].Rooms} selectedHotel={selectedHotel} /> : ''}
    </>
  );
}

const ListContainer = styled.div`
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
`;
