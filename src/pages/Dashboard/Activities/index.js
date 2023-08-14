import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useToken from '../../../hooks/useToken';
import api from '../../../services/api';
import IsNotAvailable from '../../../components/Activies/IsNotAvailable';
import ActivityDay from '../../../components/Dashboard/Activity/activityDay';

export default function Activities() {
  const token = useToken();

  const [isPaid, setIsPaid] = useState(false);
  const [isRemote, setIsRemote] = useState(false);

  // Check if user has payment confirmed
  useEffect(() => {
    async function checkUserPayment() {
      try {
        const response = await api.get('/tickets', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.status === 'PAID') {
          setIsPaid(true);
        } else {
          setIsPaid(false);
        }
      } catch (err) {
        console.log(err);
      }
    }

    checkUserPayment();
  }, [token]);

  /*   useEffect(() => {
      async function checkUserModalities() {
        try {
          const response = await api.get('/enrollments', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
  
          const isRemoteResponse = await api.get(`/tickets/isremote?enrollmentId=${response.data.id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
  
          if (isRemoteResponse.data.isRemote === true) {
            setIsRemote(true);
          } else {
            setIsRemote(false);
          }
        } catch (error) {
          console.log(error);
        }
      }
  
      checkUserModalities();
    }, [token]); */

  return (
    <>
      <ActivitiesPageContainer>
        <div>
          <h1>Escolha de atividades</h1>
        </div>
      </ActivitiesPageContainer>
      {isPaid ? (
        isRemote ? (
          <ErrorContainer>
            <h1>
              Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades.
            </h1>
          </ErrorContainer>
        ) : (
          <ActivityDay /> //componente que possui as atividades
        )
      ) : (
        <IsNotAvailable />
      )}
    </>
  );
}

const ActivitiesPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 34px;
    font-weight: 400;
  }

  h2 {
    font-size: 20px;
    font-weight: 400;
    color: #8e8e8e;
    line-height: 24px;
  }
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  margin: auto;
  margin-top: 15px;
  width: 60%;
  height: 80%;

  h1 {
    font-size: 20px;
    font-weight: 400;
    color: #8e8e8e;
    line-height: 24px;
  }
`;
