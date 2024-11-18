import styles from "./FeedBack.module.css";
import Button from "../Button";
import { useState, useRef } from "react";

function StateVsRef() {
  const input = useRef();
  const [show, setShow] = useState(false);

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      setShow(true);
    }
  }

  return (
    <div>
      <h3>Input Value: {show && input.current.value}</h3>
      <input ref={input} className={styles.control} type="text" onKeyDown={handleKeyDown} />
    </div>
  );
}

export default function Feedback(isActive) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    problem: "",
    reason: "error",
    hasErrorName: false,
    hasErrorPhone: false,
    hasErrorProblem: false,
  });

  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [problem, setProblem] = useState("");
  // const [reason, setReason] = useState("error");

  // const [hasErrorName, setHasErrorName] = useState(false);
  // const [hasErrorPhone, setHasErrorPhone] = useState(false);
  // const [hasErrorProblem, setHasErrorProblem] = useState(false);

  function ToggleError() {
    setForm((prevForm) => ({
      ...prevForm,
      hasErrorName: !prevForm.hasErrorName,
      hasErrorPhone: !prevForm.hasErrorPhone,
      hasErrorProblem: !prevForm.hasErrorProblem,
    }));
  }

  // function ToggleError() {
  //   setHasErrorName((prev) => !prev)
  //   setHasErrorPhone(!hasErrorPhone)
  //   setHasErrorProblem(!hasErrorProblem)
  // }

  return (
    <section className={styles.main}>
      <h3 style={{ textAlign: "center" }}>Обратная связь</h3>
      <Button onClick={ToggleError}>Toggle Error</Button>

      <form>
        <input
          className={styles.control}
          id="name"
          type="text"
          placeholder="Ваше имя"
          value={form.name}
          style={{
            border: form.hasErrorName ? "2px solid red" : "1px solid black",
          }}
          onChange={(e) => {
            setForm((prevForm) => ({
              ...prevForm,
              name: e.target.value,
              hasErrorName: e.target.value.trim().length === 0,
            }));
          }}
        />
        <input
          className={styles.control}
          id="phone"
          type="text"
          placeholder="Ваш номер телефона"
          value={form.phone}
          style={{
            border: form.hasErrorPhone ? "2px solid red" : "1px solid black",
          }}
          onChange={(e) => {
            setForm((prevForm) => ({
              ...prevForm,
              phone: e.target.value,
              hasErrorPhone: e.target.value.trim().length !== 11,
            }));
          }}
        />
        <input
          className={styles.control}
          id="problem"
          type="text"
          placeholder="Текст"
          value={form.problem}
          style={{
            border: form.hasErrorProblem ? "2px solid red" : "1px solid black",
          }}
          onChange={(e) => {
            setForm((prevForm) => ({
              ...prevForm,
              problem: e.target.value,
              hasErrorProblem: e.target.value.trim().length === 0,
            }));
          }}
        />
        <select
          id="reason"
          className={styles.select}
          value={form.reason}
          onChange={(e) =>
            setForm((prevForm) => ({
              ...prevForm,
              reason: e.target.value,
            }))
          }
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>

        <Button disabled={form.hasErrorName || form.hasErrorPhone || form.hasErrorProblem}>Отправить</Button>

        <pre>
          Name: {form.name}
          <br />
          Phone: {form.phone}
          <br />
          Text: {form.problem}
          <br />
          Reason: {form.reason}
        </pre>

        <StateVsRef />
      </form>
    </section>
  );
}
