import styles from "./Modal.module.css";
import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";

export default function Modal({ children, open }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal(); // Открывает диалоговое окно
    } else {
      dialog.current.close(); // Закрывает диалоговое окно
    }
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={styles.dialog}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}