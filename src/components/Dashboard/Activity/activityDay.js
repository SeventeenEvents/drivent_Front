import styled from 'styled-components';
import { BiLogIn } from 'react-icons/bi';
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import { useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

export default function ActivityDay() {
  const [selectActivityDay, setSelectActivityDay] = useState({
    isDaySelected: false,
    dayId: 0,
  });
  const MOCK_LIST_DAYS = [
    { id: 1, date: '2023-08-22' },
    { id: 2, date: '2023-08-23' },
    { id: 3, date: '2023-08-24' }
  ];
  return (
    <ContainerActivities>
      <OptionsSection>
        {
          selectActivityDay.isDaySelected?
            '':
            <h3>Primeiro, filtre pelo dia do evento: </h3>
        }
        <ButtonContainer>
          {
            MOCK_LIST_DAYS.map(day => (
              <button className={selectActivityDay.dayId===day.id?'selected_day':''} onClick={() => {setSelectActivityDay({ ...selectActivityDay, isDaySelected: true, dayId: day.id });}}>
                {dayjs(day.date).locale('pt-br').format('dddd, DD/MM')}
              </button>
            ))
          }
        </ButtonContainer>
      </OptionsSection>

      {
        selectActivityDay.isDaySelected?
          <AtivitySection>

            <PlaceActivities>
              <h3>Auditório Principal</h3>
              <ActivitiesOnPlace>
                <CardActivity>
                  <NameAndTimeContainer>
                    <h3>Minecraft: montando o PC ideal</h3>
                    <p>09:00 - 10:00</p>
                  </NameAndTimeContainer>
                  <IconConatiner>
                    <BiLogIn/>
                    <p>27 vagas</p>
                  </IconConatiner>
                </CardActivity>

                <CardActivity>
                  <NameAndTimeContainer>
                    <h3>Minecraft: Como ir para o Nether</h3>
                    <p>10:00 - 11:00</p>
                  </NameAndTimeContainer>
                  <IconConatiner className='sold_out'>
                    <AiOutlineCloseCircle/>
                    <p>Esgotado</p>
                  </IconConatiner>
                </CardActivity>
              </ActivitiesOnPlace>
            </PlaceActivities>

            <PlaceActivities>
              <h3>Auditório Lateral</h3>
              <ActivitiesOnPlace>
                <CardActivity className='selected_activity'>

                  <NameAndTimeContainer>
                    <h3>Minecraft: montando o PC ideal</h3>
                    <p>09:00 - 10:00</p>
                  </NameAndTimeContainer>

                  <IconConatiner>
                    <AiOutlineCheckCircle/>
                    <p>Inscrito</p>
                  </IconConatiner>

                </CardActivity>
              </ActivitiesOnPlace>
            </PlaceActivities>

            <PlaceActivities>
              <h3>Sala de Workshop</h3>
              <ActivitiesOnPlace>
                <CardActivity>

                  <NameAndTimeContainer>
                    <h3>Minecraft: montando o PC ideal</h3>
                    <p>09:00 - 10:00</p>
                  </NameAndTimeContainer>

                  <IconConatiner>
                    <BiLogIn/>
                    <p>27 vagas</p>
                  </IconConatiner>

                </CardActivity>
              </ActivitiesOnPlace>
            </PlaceActivities>

          </AtivitySection>
          :''
      }
    </ContainerActivities>
  );
}
const ContainerActivities = styled.main`
    font-family: 'Roboto', sans-serif;
    //border: 1px solid red;//
    width: 100%;
    height: inherit;

    .card_background{
      background-color: #FFEED2;
    }

    h1{
      font-size: 34px;
      font-weight: 400;
      line-height: 40px;
      letter-spacing: 0em;
      text-align: left;
    }
    
`;
const OptionsSection = styled.div`
  //border: 1px solid red;//
  .selected_day{
    background-color: #FFD37D;
  }
  margin-top: 37px;
  display: flex;
  flex-direction: column;
  gap: 17px;
  h3{
      color: #8E8E8E;
      font-size: 20px;
      font-weight: 400;
      line-height: 23px;
      letter-spacing: 0em;
      text-align: left;
    }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
  button{
    width: 131px;
    height: 37px;
    border: transparent;
    border-radius: 4px;
    background: #E0E0E0;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.25);

    color: #000;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const AtivitySection = styled.section`
  //border: 1px solid green;//

  margin-top: 37px;
  display: flex;
  width: 100%;
  height: 389px;
  align-items: center;
  justify-content: space-between;
`;
const PlaceActivities = styled.div`
  //border: 1px solid red;//
  flex:1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3{
    height: 27px;
    color: #7B7B7B;
    text-align: center;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const ActivitiesOnPlace = styled.div`
  //background-color: black;
  .selected_activity{
    background-color: #D0FFDB;
  }
  border: 1px solid #D7D7D7;
  width: 100%;
  height: 100%;
  padding: 10px 14px;
  color: #fff;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
`;
const CardActivity = styled.div`
  .sold_out{
      color: #CC6666;
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
  h3{
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
  color: #078632;
  width: 66px;
  height: 100%;
  font-size: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p{
    font-size: 9px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
