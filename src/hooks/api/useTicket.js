import useAsync from '../useAsync';
import useToken from '../useToken';
import * as ticketApi from '../../services/ticketApi';

export default function useTicket() {
  const token = useToken();

  const {
    data: ticket,
    loading: ticketLoading,
    error: ticketError,
<<<<<<< HEAD
    act: getTicket,
=======
    act: getTicket
>>>>>>> 8300d9472a7eaf5ad6dcc046b4c5bc44822094d0
  } = useAsync(() => ticketApi.getUserTicket(token));

  return {
    ticket,
    ticketLoading,
    ticketError,
    getTicket,
  };
}
