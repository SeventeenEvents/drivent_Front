import dayjs from 'dayjs';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import styled from 'styled-components';
export default function SubscribedActivity({ name, startAt, endAt, duration }) {
  return (
    <CardActivity cardHeight={duration}>
      <NameAndTimeContainer>
        <h2>{name}</h2>
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
    height: ${props => (props.cardHeight) * 79}px;
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
    h2{
        width: 100%;

        color: #343434!important;
        text-align: left;
        font-size: 12px!important;
        font-style: normal!important;;
        font-weight: 700;
        line-height: normal;
    }
    p{
        width: 100%;
        color: #343434;
        font-size: 12px!important;
        font-style: normal!important;
        font-weight: 400!important;
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
