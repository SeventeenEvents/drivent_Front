import api from './api';

export async function getTicketType(token) {
  const response = await api.get('/tickets/types', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
<<<<<<< HEAD
=======

export async function getTicket(token) {
  const response = await api.get('/tickets', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
>>>>>>> d482f31c4324380d26185c8b25e06df5dc1c3a2b
