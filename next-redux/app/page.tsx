import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useState } from "react";

function DisplayName() {
  const { name } = useSelector((state) => state.profile);
  return <h1> I am {name} !!</h1>;
}
export default function Home() {
  const inputName = useRef();
  const dispatch = useDispatch();
  function submitName() {
    console.log(inputName.current.value);
    dispatch(SET_NAME(inputName.current.value));
  }
  return (
    <main className={styles.main}>
      <input placeholder="enter name" ref={inputName} />
      <button onClick={submitName}>Enter name</button>
      <DisplayName />
    </main>
  );
}
