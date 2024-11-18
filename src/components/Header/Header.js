import React, { useEffect, useState } from "react";
import "../../css/Button.css";
import styles from "./Header.module.css";

function Header() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <header className={styles.head}>
      <h3>HELLO REACT</h3>
      <div className={styles.jopa}>
        Время:
        {now.toLocaleTimeString()}
      </div>
    </header>
  );
}

export default Header;
