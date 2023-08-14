import dayjs from 'dayjs';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import styled from 'styled-components';
export default function SubscribedActivity({ name, startAt, endAt, }) {
  return(
    <CardActivity>
      <NameAndTimeContainer>
        <h3>{name}</h3>
        <p>{dayjs(startAt).format('HH:MM')} - {dayjs(endAt).format('HH:MM')}</p>
      </NameAndTimeContainer>
      <IconConatiner>
        <AiOutlineCheckCircle />
        <p>Inscrito</p>
      </IconConatiner>
    </CardActivity>
  );
}
const CardActivity = styled.div`
    background-color: #D0FFDB;

    width: 100%;
    height: 79px;
    padding: 10px;
    border-radius: 5px;
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
        width: 100%;

        color: #343434;
        text-align: left;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
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
