import Head from "next/head";
import styles from "../styles/Home.module.css";
import Modal from "../components/nameModal";
import { useRouter } from "next/router";
import RoomModal from "../components/RoomModal";

import { useState } from "react";

export default function Home() {
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Reflective-Shooting</title>
      </Head>
      <h1>Reflective-Shooting</h1>
      <button onClick={() => setModalIsOpen(!ModalIsOpen)}>Start</button>
      {userName ? (
        <div>
          <p>{userName}</p>
          <button onClick={() => router.push("/room")}>お部屋を作る</button>
          <button onClick={() => setIsOpen(!isOpen)}>お部屋を探す</button>
        </div>
      ) : (
        <></>
      )}
      {ModalIsOpen ? (
        <Modal
          setModalIsOpen={setModalIsOpen}
          ModalIsOpen={ModalIsOpen}
          setUserName={setUserName}
          userName={userName}
        />
      ) : (
        <></>
      )}
      {isOpen ? (
        <RoomModal text={"ルームIDを入力してください"} btn={"参る"} />
      ) : (
        <></>
      )}
    </div>
  );
}
