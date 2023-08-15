import styled from 'styled-components';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import api from '../../../services/api';
import useToken from '../../../hooks/useToken';
import VacancyActivity from './vacancyActivy';
import NotVacancyActivity from './notVacancyActivy';
import SubscribedActivity from './subscribedActivity';
import { toast } from 'react-toastify';

export default function ActivityDay() {
  const [selectActivityDay, setSelectActivityDay] = useState({
    isDaySelected: false,
    day: 0,
  });
  const [activities, setActivities] = useState([]);
  const [reserved, setReserved] = useState([]);
  const [reloadUseEffect, setReloadUseEffect] = ([]);

  const token = useToken();

  async function getActivities() {
    try {
      const loadedActivities = await api.get('/activities', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setActivities(loadedActivities.data);
    } catch (error) {
      toast.error('Erro ao carregar atividades!');
    }
  }
  async function getReservedActivities() {
    try {
      const reservedActivities = await api.get('/activities/reserved', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setReserved(reservedActivities.data);
    } catch (error) {
      toast.error('Não conseguimos carregar suas atividades reservadas');
    }
  }

  useEffect(() => {
    getActivities();
    getReservedActivities();
  }, [reloadUseEffect]);

  return (
    <ContainerActivities>
      <OptionsSection>
        {
          selectActivityDay.isDaySelected ?
            '' :
            <h3>Primeiro, filtre pelo dia do evento: </h3>
        }
        <ButtonContainer>
          {
            activities.days?.map((day, i) => (
              <button key={i} className={selectActivityDay.day === day ? 'selected_day' : ''} onClick={() => { setSelectActivityDay({ ...selectActivityDay, isDaySelected: true, day: day }); }}>
                {dayjs(day).locale('pt-br').format('dddd, DD/MM').split('-feira')}
              </button>
            ))
          }
        </ButtonContainer>
      </OptionsSection>

      {
        selectActivityDay.isDaySelected ?
          <AtivitySection>

            {
              activities.locations?.map((location, i) => (

                <PlaceActivities key={i}>
                  <h3>{location}</h3>
                  <ActivitiesOnPlace>
                    {
                      activities.activities?.map(function(activity) {
                        if(activity.day === selectActivityDay.day && location === activity.location) {
                          if(activity.vacancies>0 && !reserved[0].reservedActivitiesId?.includes(activity.id)) {
                            return(
                              <VacancyActivity
                                key={activity.id}
                                name={activity.name}
                                startAt={activity.startAt}
                                endAt={activity.endAt}
                                vacancies={activity.vacancies}
                                activityId={activity.id}
                                setReloadUseEffect={setReloadUseEffect}
                              />);
                          }
                          if(activity.vacancies===0 && !reserved[0].reservedActivitiesId?.includes(activity.id)) {
                            return(
                              <NotVacancyActivity
                                key={activity.id}
                                name={activity.name}
                                startAt={activity.startAt}
                                endAt={activity.endAt}
                              />);
                          }
                          if(activity.vacancies>0 && reserved[0].reservedActivitiesId?.includes(activity.id)) {
                            return(
                              <SubscribedActivity
                                key={activity.id}
                                name={activity.name}
                                startAt={activity.startAt}
                                endAt={activity.endAt}
                              />);
                          }
                        }
                        return '';
                      })
                    }

                  </ActivitiesOnPlace>
                </PlaceActivities>
              ))
            }

          </AtivitySection>
          : ''
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
    cursor: pointer;
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
