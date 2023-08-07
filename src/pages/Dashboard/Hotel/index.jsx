import styled from 'styled-components';
import HotelsList from '../../../components/Hotel/HotelsList';
import { useEffect, useState } from 'react';
import useToken from '../../../hooks/useToken';
import axios from 'axios';
import RoomList from '../../../components/Hotel/RoomList';

export default function Hotel() {
  const token = useToken();
  const [hotels, setHotels] = useState();
  const [includesHotel, setIncludesHotel] = useState();
  const [ticketPaid, setTicketPaid] = useState();
  console.log('entrou no index hotel');

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    console.log('entrou no useEffect');
    const hotelsList = axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/hotels`, headers)
      .then((res) => {
        console.log(res);
        setHotels(res.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 402) setTicketPaid(false);
        if (error.response && error.response.status === 404) setIncludesHotel(false);
      });
    console.log(hotelsList);
  }, [token]);

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

  // if (!ticketPaid) {
  //   return (
  //     <>
  //       <Title>Escolha de quarto e hotel</Title>
  //       <Subtitle>Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem</Subtitle>
  //     </>
  //   );
  // }
  // if (!includesHotel) {
  //   return (
  //     <>
  //       <Title>Escolha de quarto e hotel</Title>
  //       <Subtitle>Sua modalidade de ingresso não inclui hospedagem. Prossiga para a escolha de atividades</Subtitle>
  //     </>
  //   );
  // }

  return (
    <>
      <Title>Escolha de quarto e hotel</Title>
      <Subtitle>Primeiro, escolha seu hotel</Subtitle>
      <HotelsList hotels={hotelsData} />
    </>
  );
}

const Subtitle = styled.h2`
  color: #8e8e8e;
  font-size: 20px;
  line-height: 24px;
  padding: 15px 0px;
`;
const Title = styled.h1`
  color: #000;
  font-family: Roboto;
  font-size: 34px;
  font-weight: 400;
`;
