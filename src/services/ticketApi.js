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

>>>>>>> 4b2a5e73d62cdbacbcf93935e2cf33e43f48f429
