import styled from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";
import RoomModal from "../../components/RoomModal";

const Room = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [roomId, setRoomId] = useState("");
  const router = useRouter();
  return (
    <RoomStyled>
      <button onClick={() => setIsOpen(!isOpen)}>IDを作る</button>
      {isOpen ? (
        <RoomModal
          text={"ルームID"}
          btn={"作成"}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      ) : (
        <></>
      )}
      {roomId ? <button onClick={() => {}}>参る</button> : <></>}
    </RoomStyled>
  );
};
export default Room;

const RoomStyled = styled.div``;
