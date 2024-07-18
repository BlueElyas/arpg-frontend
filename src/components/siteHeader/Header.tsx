import { useEffect, useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [showFirstText, setShowFirstText] = useState<boolean>(true);

  useEffect(() => {
    const myTimeout = setTimeout(() => {
      setShowFirstText((prev) => !prev);
    }, 4000);

    return () => {
      clearTimeout(myTimeout);
    };
  }, []);

  return (
    <header className={styles.header}>
      {showFirstText ? (
        <h1 className={styles.typewriter}>Welcome champion</h1>
      ) : (
        <h1 className={styles.typewriter}>Are you ready?</h1>
      )}
    </header>
  );
}
