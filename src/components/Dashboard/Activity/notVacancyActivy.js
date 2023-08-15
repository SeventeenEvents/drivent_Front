import dayjs from 'dayjs';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import styled from 'styled-components';
export default function NotVacancyActivity({ name, startAt, endAt, }) {
  return(
    <CardActivity>
      <NameAndTimeContainer>
        <h2>{name}</h2>
        <p>{dayjs(startAt).format('HH:MM')} - {dayjs(endAt).format('HH:MM')}</p>
      </NameAndTimeContainer>
      <IconConatiner>
        <AiOutlineCloseCircle />
        <p>Esgotado</p>
      </IconConatiner>
    </CardActivity>
  );
}
const CardActivity = styled.div`
  .sold_out{
  }
  
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
  h2{
    color: #343434;
    text-align: left;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  p{
    color: #343434;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const IconConatiner = styled.div`
  border-left: 1px solid #CFCFCF;
  color: #CC6666;
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
