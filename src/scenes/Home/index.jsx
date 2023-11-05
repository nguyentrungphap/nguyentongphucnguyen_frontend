import React from "react";
import MainCarousel from "./components/MainCarousel";
import ProductBox from "../../components/ProductBox";
import styles from "./styles.module.scss";
export default function Home() {
  return (
    <div className={styles.wrapper}>
      <MainCarousel />
      <ProductBox />
    </div>
  );
}
