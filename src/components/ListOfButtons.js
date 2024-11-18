import React from "react";
import Button from "./Button";
import { differences } from "../data";
import { useState } from "react";

export default function ListOfButton() {
    const [content, setContent] = useState(null);

    function handleClick(type) {
      console.log("qq", type);
      setContent(type);
    }
  return (
    <div>
      <Button isActive={content === "way"} onClick={() => handleClick("way")}>
        Кнопка 1
      </Button>
      <Button isActive={content === "easy"} onClick={() => handleClick("easy")}>
      Кнопка 2
      </Button>
      <Button isActive={content === "programm"} onClick={() => handleClick("programm")}>
      Кнопка 3
      </Button>
      <div className="spisok">{content ? <p>{differences[content]}</p> : <p>Нажми</p>}</div>
    </div>
  );
}
