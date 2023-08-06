import styled from 'styled-components';

export default function TicketBox({ id, name, price, isRemote, setShow, setPrice, selected, setSelected }) {
  function select() {
    if (selected.includes(id)) {
      setSelected([]);
      setShow(false);
    } else {
      setSelected([id]);
      if (isRemote === true) {
        setShow(true);
        setPrice(price);
      }
    }
    if (isRemote === false) setShow(false);
  }

  return (
    <StyledBox
      onClick={() => select()}
      selected={selected}
      id={id}>
      <h2>{name}</h2>
      <h4>{`R$ ${price}`}</h4>
    </StyledBox>
  );
}

const StyledBox = styled.div`
  margin: 10px 30px 0 0;
  width: 145px;
  height: 145px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${(props) => (!props.selected.includes(props.id) ? 'white' : '#FFEED2')};
  border: ${(props) => (!props.selected.includes(props.id) ? 'solid 1px #CECECE;' : '')};

    :hover {
      border: solid 2px #CECECE;
    }

  h2 {
    margin-top: 0!important;
    font-size: 16px;
    font-weight: 400;
    color: #454545!important;
  }

  h4 {
    margin-top: 5px;
    font-size: 14px;
    font-weight: 400;
    color: #898989!important;
  }
`;
