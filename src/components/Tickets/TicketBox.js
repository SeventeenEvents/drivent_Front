import styled from 'styled-components';

export default function TicketBox({
  id,
  name,
  price,
  isRemote,
  setShow,
  setPrice,
  selected,
  setSelected,
  setIncludesHotel,
  setIsRemote,
  setTicketTypeId
}) {
  function select() {
    if (selected.includes(id)) {
      setSelected([]);
      setShow(false);
      if (isRemote) {
        setPrice(0); // Set price to 0 only if it's a remote ticket
      }
      setIncludesHotel(false);
      setIsRemote(false);
      setTicketTypeId(0); // Reset ticketTypeId when the ticket is deselected
    } else {
      setSelected([id]);
      if (isRemote) {
        setShow(true);
        setPrice(100);
        setIncludesHotel(false);
        setIsRemote(true);
        setTicketTypeId(1);
      } else {
        setShow(false);
        setPrice(250);
        setIncludesHotel(true);
        setIsRemote(false);
        setTicketTypeId(2);
      }
    }
  }

  return (
    <>
      {id === 1 || id === 2 ? (
        <StyledBox onClick={() => select()} selected={selected.includes(id)} id={id}>
          <h2>{name}</h2>
          <h4>{`R$ ${price}`}</h4>
        </StyledBox>
      ) : null}
    </>
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
  background-color: ${(props) => (!props.selected ? 'white' : '#FFEED2')};
  border: ${(props) => (!props.selected ? 'solid 1px #CECECE;' : '')};

  :hover {
    border: solid 2px #cecece;
  }

  h2 {
    margin-top: 0 !important;
    font-size: 16px;
    font-weight: 400;
    color: #454545 !important;
  }

  h4 {
    margin-top: 5px;
    font-size: 14px;
    font-weight: 400;
    color: #898989 !important;
  }
`;
