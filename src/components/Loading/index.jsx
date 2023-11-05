import React from "react";
import styles from "./styles.module.scss";

export default function Loading() {
  return (
    <div className={styles.wrapper}>
      <img src="/assets/img/Loading-unscreen.gif" alt="loading" />
    </div>
  );
}
