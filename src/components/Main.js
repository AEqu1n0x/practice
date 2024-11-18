import React from "react";
import Spisok from "./Spisok.js";
import { data } from "../data.js";

export default function Main() {

  return (
    <div className="spisok">
      {data.map((d) => (
        <Spisok key={d.title} {...d} />
      ))}
    </div>
  );
}

 