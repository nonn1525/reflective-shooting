import styled from "styled-components";

const RoomModal = ({ text, btn, isOpen, setIsOpen }) => {
  return (
    <RoomModalStyled>
      <div id="overlay">
        <div id="content">
          <p>{text}</p>
          <input type="text" />
          <p>
            <button onClick={() => setIsOpen(!isOpen)}>{btn}</button>
          </p>
        </div>
      </div>
    </RoomModalStyled>
  );
};
export default RoomModal;

const RoomModalStyled = styled.div`
  #content {
    z-index: 2;
    width: 10%;
    padding: 1em;
    background: #fff;
  }
  #overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
