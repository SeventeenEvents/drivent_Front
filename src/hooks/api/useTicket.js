import useAsync from '../useAsync';
import useToken from '../useToken';
import * as ticketApi from '../../services/ticketApi';

export default function userTicket() {
  const token = useToken();

  const {
    data: userTicket,
    error: userTicketError,
    loading: userTicketLoading,
    act: getUserTicket,
  } = useAsync(() => ticketApi.getUserTicket(token));

  return { userTicket, userTicketError, userTicketLoading, getUserTicket };
}
