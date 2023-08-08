import styled from 'styled-components';

export default function HotelBox({
  includesHotel,
  setShow,
  setPrice,
  selectedHotel,
  setSelectedHotel,
  setTicketTypeId
}) {
  function selectHotel(id) {
    if (selectedHotel.includes(id)) {
      setSelectedHotel([]);
      setShow(false);
      setPrice(0);
      setTicketTypeId(0); // Reset ticketTypeId when the hotel is deselected
    } else {
      setSelectedHotel([id]);
      setShow(true);
      setPrice(id === 2 ? 250 : 600); // Set price to 0 if it's 'Sem hotel', otherwise set it to 350

      // Use different ticket type ids for 'Com hotel' and 'Sem hotel'
      setTicketTypeId(id === 2 ? 2 : 3); // Set ticketTypeId to 2 if it's 'Sem hotel', otherwise set it to 3
    }
  }

  return (
    <>
      {/* Show the hotel with id 2 (Sem hotel) */}
      <StyledBox onClick={() => selectHotel(2)} selected={selectedHotel.includes(2)}>
        <h2>Sem hotel</h2>
        <h4>+ R$ 0</h4>
      </StyledBox>

      {/* Show the hotel with id 3 */}
      <StyledBox onClick={() => selectHotel(3)} selected={selectedHotel.includes(3)}>
        <h2>Hotel</h2>
        <h4>+ R$ 350</h4>
      </StyledBox>
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
  background-color: ${(props) => (props.selected ? '#FFEED2' : 'white')};
  border: ${(props) => (props.selected ? 'solid 2px #CECECE;' : 'solid 1px #CECECE;')};

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
}`;
