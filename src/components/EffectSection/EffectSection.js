import React, { useEffect, useState, useCallback } from "react";
import styles from "./EffectSection.module.css";
import Button from "../Button";
import Modal from "../Modal/Modal";
import useInput from "../../hooks/useinput";

export default function EffectSection() {
  const input = useInput();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <section className={styles.main}>
      <h3 className={styles.name}>Effects</h3>

      <Button
        onClick={() => {
          setModal(true);
        }}
      >
        Открыть информацию
      </Button>

      {modal && (
        <Modal open={modal}>
          <h3>Hello from Modal</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
            a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.
          </p>
          <Button
            onClick={() => {
              setModal(false);
            }}
          >
            Закрыть
          </Button>
        </Modal>
      )}

      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <input type="text" className={styles.control} {...input} />
          <h6>{input.value}</h6>
          <ul>
            {users
              .filter((user) => user.name.toLowerCase().includes(input.value.toLowerCase()))
              .map((u) => (
                <li key={u.id}>{u.name}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
}
