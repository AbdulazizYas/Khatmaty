import { forwardRef, useState } from "react";
import styles from "../styles/Utils.module.css";

export function Cross() {
  return (
    <>
      <div className={styles.line1}></div>
      <div className={styles.line2}></div>
    </>
  );
}

export function Counter() {
  return forwardRef(({ id }, ref) => {
    const [value, setValue] = useState(0);
    return (
      <div className={styles.inputWrapper}>
        <button
          type="button"
          onClick={() => setValue((prev) => prev + 1)}
          className={`${styles.btn}`}
        >
          +
        </button>

        <input
          className={styles.counter}
          min={0}
          name={id}
          id={id}
          type="number"
          ref={ref}
          onChange={(e) => setValue(e.target.value)}
          value={value || 0}
        />
        <button
          type="button"
          onClick={() => setValue((prev) => Math.max(0, prev - 1))}
          className={`${styles.btn}`}
        >
          -
        </button>
      </div>
    );
  });
}
