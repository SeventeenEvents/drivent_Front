import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketApi';

export default function useTickets() {
  const token = useToken();
  
  const {
    data: ticketType,
    loading: ticketTypeLoading,
    error: ticketTypeError,
    act: getTicketType
  } = useAsync(() => ticketApi.getTicketType(token));

  return {
    ticketType,
    ticketTypeLoading,
    ticketTypeError,
    getTicketType
  };
}
