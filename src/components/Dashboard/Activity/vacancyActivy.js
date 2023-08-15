import dayjs from 'dayjs';
import { BiLogIn } from 'react-icons/bi';
import styled from 'styled-components';
import useToken from '../../../hooks/useToken';
import api from '../../../services/api';
import { toast } from 'react-toastify';

export default function VacancyActivity({ name, startAt, endAt, vacancies, activityId, setReloadUseEffect }) {
  const token = useToken();

  async function reserveActivity() {
    try {
      const reserve = await api.post(`/activities/reserve/${activityId}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(reserve);
      toast.success('Inscrito na atividade com sucesso!');
      setReloadUseEffect([activityId]);
    } catch (error) {
      console.log(error);
    }
  }
  return(
    <CardActivity>
      <NameAndTimeContainer>
        <h3>{name}</h3>
        <p>{dayjs(startAt).format('HH:MM')} - {dayjs(endAt).format('HH:MM')}</p>
      </NameAndTimeContainer>
      <IconConatiner onClick={reserveActivity}>
        <BiLogIn />
        <p>{vacancies} vagas</p>
      </IconConatiner>
    </CardActivity>
  );
}
const CardActivity = styled.div`
    border: transparent;
    width: 100%;
    height: 79px;
    padding: 10px;
    border-radius: 5px;
    background: #F1F1F1;

    color: #343434;
    font-style: normal;
    line-height: normal;

    display: flex;
    align-items: center;
`;
const NameAndTimeContainer = styled.div`
  width: 100%;
  height: 100%;
  h3{
    color: #343434;
    text-align: left;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 100%;
  }
  p{
    width: 100%;
    color: #343434;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const IconConatiner = styled.div`
  border-left: 1px solid #CFCFCF;
  color: #078632;
  width: 66px;
  height: 100%;
  font-size: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  p{
    font-size: 9px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;