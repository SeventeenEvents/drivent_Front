import useToken from './useToken';
import useAsync from './useAsync';

export default function useGetPayment() {
  const { token } = useToken();

  const {
    data: payment,
    loading: loadingPayment,
    error: errorPayment,
    act: getPayment,
  } = useAsync(() => getPayment(token));

  return {
    payment,
    loadingPayment,
    errorPayment,
    getPayment,
  };
}
