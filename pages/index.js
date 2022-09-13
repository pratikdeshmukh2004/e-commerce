import styles from "../styles/Home.module.css";
import Header from "../components/layout/Header";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import Cart from "../components/orders/cart";

export default function Home() {
  const [openCart, setCart] = useState(false);

  const handleKeyPress = useCallback((event) => {
    if (event.code === "KeyK") {
      setCart(true);
    }else if (event.code == "Escape"){
      setCart(false)
    }
  }, []);

  useEffect(() => {
    // attach the event listener
    document.addEventListener("keydown", handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className={styles.container}>
      <Head>
        <title>E-Commerce Website</title>
      </Head>
      <Header cartStatus={openCart} setCart={setCart} />
      <Cart open={openCart} onClose={setCart} />
    </div>
  );
}
