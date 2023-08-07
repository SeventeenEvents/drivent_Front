import { useEffect, useState } from 'react';
import styled from 'styled-components';
import api from '../../../services/api';
import useToken from '../../../hooks/useToken';
import TicketBox from '../../../components/Tickets/TicketBox';

export default function Payment() {
  const token = useToken();
  const [types, setTypes] = useState([]);
  const [selected, setSelected] = useState([]);
  const [show, setShow] = useState(false);
  const [price, setPrice] = useState(0);

  async function getTypes() {
    try {
      const response = await api.get('/tickets/types', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTypes(response.data);
    } catch (err) {

    }
  }

  useEffect(() => {
    getTypes();
  }, []);

  return (
    <TicketsPageContainer>
      <div>
        <h1>Ingresso e Pagamento</h1>
        <h2>Primeiro escolha sua modalidade de pagamento</h2>
      </div>
      <TicketsContainer>
        {types.map((type) => (<TicketBox
          key={type.id}
          name={type.name}
          price={type.price}
          id={type.id}
          isRemote={type.isRemote}
          setShow={setShow}
          setPrice={setPrice}
          selected={selected}
          setSelected={setSelected} />))}
      </TicketsContainer>
      <CheckOutContainer show={show}>
        <h3>Fechado! O total ficou em <span>R$ {price}</span>. Agora é só confirmar:</h3>
        <button>RESERVAR INGRESSO</button>
      </CheckOutContainer>
    </TicketsPageContainer>
  );
}

const TicketsPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 34px;
    font-weight: 400;
  }

  h2 {
    margin-top: 34px;
    font-size: 20px;
    font-weight: 400;
    color: #8E8E8E
  }
`;

const TicketsContainer = styled.div`
  margin-top: 15px;
  display: flex;
`;

const CheckOutContainer = styled.div`
  margin-top: 15px;
  display: ${(props) => (props.show === false ? 'none' : 'flex')};
  flex-direction: column;
  h3 {
    margin-top: 30px;
    color: #8E8E8E;
    font-size: 20px;
    font-weight: 400px;
  }

  span {
    font-weight: 700;
  }

  button {
    margin-top: 15px;
    width: 162px;
    height: 37px;
    border: none;
    border-radius: 4px;
    font-size: 13px;
    background-color: #e0e0e0;
    box-shadow: 0px 2px 10px 2px rgba(221,225,230,0.94);
    cursor: pointer;

    :hover {
      border: solid 2px #CECECE;
    }
  }
`;
