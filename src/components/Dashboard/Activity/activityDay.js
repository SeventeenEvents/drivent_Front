import styled from 'styled-components';

export default function ActivityDay() {
  return (
    <ContainerActivities>
      <h1>Escolha de atividades</h1>
      <OptionsSection>
        <h3>Primeiro, filtre pelo dia do evento: </h3>
        <ButtonContainer>
          <button>Sexta, 22/10</button>
          <button>Sexta, 22/10</button>
          <button>Sexta, 22/10</button>
        </ButtonContainer>
      </OptionsSection>

      <AtivitySection>

        <PlaceActivities>
          <h3>Local 1</h3>
          <ActivitiesOnPlace>
            <p>Aqui virão atividades</p>
          </ActivitiesOnPlace>
        </PlaceActivities>
        
        <PlaceActivities>
          <h3>Local 2</h3>
          <ActivitiesOnPlace>
            <p>Aqui virão atividades</p>
          </ActivitiesOnPlace>
        </PlaceActivities>

        <PlaceActivities>
          <h3>Local 3</h3>
          <ActivitiesOnPlace>
            <p>Aqui virão atividades</p>
          </ActivitiesOnPlace>
        </PlaceActivities>

      </AtivitySection>

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
  border: 1px solid green;//

  margin-top: 37px;
  display: flex;
  width: 100%;
  height: 389px;
  align-items: center;
  justify-content: space-between;
`;
const PlaceActivities = styled.div`
  border: 1px solid red;//
  flex:1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //width: 100px;
`;
const ActivitiesOnPlace = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  padding: 10px 14px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
