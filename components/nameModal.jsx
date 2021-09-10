import styled from "styled-components";

const Modal = ({ setModalIsOpen, ModalIsOpen, setUserName, userName }) => {
  const handleChange = (e) => {
    setUserName(() => e.target.value);
    console.log(userName);
  };
  const setName = () => {
    setModalIsOpen(!ModalIsOpen);
  };
  return (
    <ModalStyled>
      <div id="overlay">
        <div id="content">
          <p>名前を教えてください。</p>
          <input type="text" onChange={handleChange} />
          <button onClick={setName}>決定</button>
        </div>
      </div>
    </ModalStyled>
  );
};

export default Modal;

const ModalStyled = styled.div`
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
