import React from "react";
import Button from "../components/Button";

export default function TabSection({ act, onChange }) {
  return (
    <section className="tab">
      <Button isActive={act === "main"} onClick={() => onChange("main")}>
        Главная
      </Button>
      <Button isActive={act === "feedback"} onClick={() => onChange("feedback")}>
        Обратная связь
      </Button>
      <Button isActive={act === "effect"} onClick={() => onChange("effect")}>
        Эффект
      </Button>
    </section>
  );
};
