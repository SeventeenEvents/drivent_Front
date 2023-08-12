import styled from 'styled-components';

export default function IsNotAvailable() {
  return (
    <ErrorContainer>
      <h1> Você precisa ter confirmado pagamento antes de fazer a escolha de atividades </h1>
    </ErrorContainer>
  );
}

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
