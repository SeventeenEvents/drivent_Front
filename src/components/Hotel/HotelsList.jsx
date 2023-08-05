import styled from 'styled-components';
import { useState } from 'react';
import HotelCard from './HotelCard';

export default function HotelsList() {
  // const [hotels, setHotels] = useState();
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
    },    {
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

  return (
    <>
      <ListContainer>
        {hotelsData.map((hotel) => {
          return (
            <HotelCard
              key={hotel.id}
              name={hotel.name}
              image={hotel.image}
              type={hotel.name}
              availability={hotel.Rooms[0].capacity}
            />
          );
        })}
      </ListContainer>
    </>
  );
}

const ListContainer = styled.div`
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
`;
