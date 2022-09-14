import styles from "../styles/Home.module.css";
import Header from "../components/layout/Header";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import Cart from "../components/orders/cart";
import Product from "../components/products/product_card";
import { useTheme } from "next-themes";

export default function Home() {
  const [openCart, setCart] = useState(false);
  const [cart, addProductCart] = useState([]);
  const products = [
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "35",
      color: "Black",
      colors: [
        { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
        { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
        { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
      ],
      sizes: [
        { name: "XXS", inStock: true },
        { name: "XS", inStock: true },
        { name: "S", inStock: true },
        { name: "M", inStock: true },
        { name: "L", inStock: true },
        { name: "XL", inStock: true },
        { name: "XXL", inStock: true },
        { name: "XXXL", inStock: false },
      ],
    },
    {
      id: 2,
      name: "Basic Tee 1",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "350",
      color: "Black",
      colors: [
        { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
        { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
        { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
      ],
      sizes: [
        { name: "XXS", inStock: true },
        { name: "XS", inStock: true },
        { name: "S", inStock: true },
        { name: "M", inStock: true },
        { name: "L", inStock: true },
        { name: "XL", inStock: true },
        { name: "XXL", inStock: true },
        { name: "XXXL", inStock: false },
      ],
    },
    {
      id: 3,
      name: "Basic Tee 2",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "3500",
      color: "Black",
    },
    {
      id: 4,
      name: "Basic Tee 3",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "3555",
      color: "Black",
    },
    {
      id: 4,
      name: "Basic Tee 4",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "353",
      color: "Black",
    },
    {
      id: 6,
      name: "Basic Tee 5",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "352",
      color: "Black",
    },
    {
      id: 99,
      name: "Basic Tee 6",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "352",
      color: "Black",
    },
    {
      id: 11,
      name: "Basic Tee 7",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "3",
      color: "Black",
    },
    {
      id: 111,
      name: "Basic Tee 8",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "5",
      color: "Black",
    },
  ];
  const { systemTheme, theme, setTheme } = useTheme();

  const handleKeyPress = useCallback((event) => {
    if (event.code === "KeyC") {
      setCart(true);
    } else if (event.code == "Escape") {
      setCart(false);
    } else if (event.code == "KeyD") {
      setTheme("dark");
    } else if (event.code == "KeyL") {
      setTheme("light");
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
      <Cart
        addProductCart={addProductCart}
        cartProducts={cart}
        open={openCart}
        onClose={setCart}
      />
      <Header cart={cart} cartStatus={openCart} setCart={setCart} />
      <div>
        <div className="mx-auto max-w-2xl py-20 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-200 text-center">
            New Arrivals
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product, index) => (
              <Product
                cart={cart}
                addProductCart={addProductCart}
                setCart={setCart}
                key={index}
                product={product}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
