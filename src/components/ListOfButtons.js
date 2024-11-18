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
        Пиво
      </Button>
      <Button isActive={content === "easy"} onClick={() => handleClick("easy")}>
        Колбаса
      </Button>
      <Button isActive={content === "programm"} onClick={() => handleClick("programm")}>
        Селедка
      </Button>
      <div className="spisok">{content ? <p>{differences[content]}</p> : <p>ЖМЯКАЙ</p>}</div>
    </div>
  );
}
