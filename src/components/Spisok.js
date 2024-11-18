import React from "react";

function Spisok({ title, description }) {
  return (
    <ul>
      <li>
        <strong>{title}</strong>
        <p>{description}</p>
      </li>
    </ul>
  );
}

export default Spisok;
