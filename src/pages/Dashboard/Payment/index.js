import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useToken from '../../../hooks/useToken';
import TicketBox from '../../../components/Tickets/TicketBox';
import HotelBox from '../../../components/Tickets/HotelBox';
import { getPersonalInformations } from '../../../services/enrollmentApi';
import { toast } from 'react-toastify';
import useTicketTypes from '../../../hooks/api/useTicketTypes';
import api from '../../../services/api'; // Importe o serviço de API, se não estiver importado.

export default function Payment() {
  const token = useToken();
  const [types, setTypes] = useState([]);
  const [selected, setSelected] = useState([]);
  const [show, setShow] = useState(false);
  const [price, setPrice] = useState(0);
  const [includesHotel, setIncludesHotel] = useState(false);
  const [isRemote, setIsRemote] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState([]);
  const [hasEnrollment, setHasEnrollment] = useState(false);

  // New
  const [ticketTypeId, setTicketTypeId] = useState(0);
  const { ticketTypes } = useTicketTypes();

  useEffect(() => {
    setTypes(ticketTypes);
  }, [ticketTypes]);

  useEffect(() => {
    async function checkUserEnrollment() {
      try {
        const personalInformations = await getPersonalInformations(token);
        setHasEnrollment(personalInformations !== null);
      } catch (err) {
        console.log(err);
      }
    }

    checkUserEnrollment();
  }, [token]);

  async function submit() {
    const enrrolmentId = await api.get('/enrollments', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const body = {
      ticketTypeId: ticketTypeId,
      enrrolmentId: enrrolmentId.data.id,
      status: 'RESERVED'
    };

    console.log(body);

    try {
      const response = await api.post('/tickets', body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success('Ingresso comprado com sucesso!');
    } catch (err) {
      toast.error('Erro ao comprar ingresso');
    }
  }

  return (
    <>
      {hasEnrollment ? (
        <>
          <TicketsPageContainer>
            <div>
              <h1>Ingresso e Pagamento</h1>
              <h2>Primeiro escolha sua modalidade de pagamento</h2>
            </div>
            <TicketsContainer>
              {types.map((type) => (
                <TicketBox
                  key={type.id}
                  name={type.name}
                  price={type.price}
                  id={type.id}
                  isRemote={type.isRemote}
                  setShow={setShow}
                  setPrice={setPrice}
                  selected={selected}
                  setSelected={setSelected}
                  setIncludesHotel={setIncludesHotel}
                  setIsRemote={setIsRemote}
                  selectedHotel={selectedHotel}
                  setTicketTypeId={setTicketTypeId}
                  type={type}
                />
              ))}
            </TicketsContainer>
            {!isRemote && includesHotel && (
              <>
                <div>
                  <h2>Ótimo! Agora escolha sua modalidade de hospedagem</h2>
                </div>
                <HotelsContainer>
                  <HotelBox
                    includesHotel={true}
                    setShow={setShow}
                    setPrice={setPrice}
                    selectedHotel={selectedHotel}
                    setSelectedHotel={setSelectedHotel}
                    setTicketTypeId={setTicketTypeId}
                  />
                </HotelsContainer>
              </>
            )}
            <CheckOutContainer show={show}>
              <h3>
                Fechado! O total ficou em <span>R$ {price}</span>. Agora é só confirmar:
              </h3>
              <button onClick={submit}>RESERVAR INGRESSO</button>
            </CheckOutContainer>
          </TicketsPageContainer>
        </>
      ) : (
        <ErrorContainer>
          <h3> Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso </h3>
        </ErrorContainer>
      )}
    </>
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
    color: #8e8e8e;
  }
`;

const TicketsContainer = styled.div`
  margin-top: 15px;
  display: flex;
`;

const HotelsContainer = styled.div`
  margin-top: 15px;
  display: flex;
`;

const CheckOutContainer = styled.div`
  margin-top: 15px;
  display: ${(props) => (props.show === false ? 'none' : 'flex')};
  flex-direction: column;
  h3 {
    margin-top: 30px;
    color: #8e8e8e;
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
    box-shadow: 0px 2px 10px 2px rgba(221, 225, 230, 0.94);
    cursor: pointer;

    :hover {
      border: solid 2px #cecece;
    }
  }
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 80%;

  div {
    width: 50%;
  }

  font-size: 20px;
  font-weight: 400;
  color: #8e8e8e;
  line-height: 24px;
`;
