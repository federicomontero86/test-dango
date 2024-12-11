"use client";

import { Provider } from "react-redux";
import { Inter } from "next/font/google";
import { RxHamburgerMenu } from "react-icons/rx";
import HeroSlider from "./components/HeroSlider";
import ProductGrid from "./components/ProductGrid";
import TopBar from "./components/TopBar";
import Navigation from "./components/Navigation";
import CartCount from "./components/CartCount";
import CartButton from "./components/CartButton";

import store from "./store/store";

const inter = Inter({ subsets: ["latin"] });

const products = [
  {
    id: 1,
    image: "/product-image-1.png",
    price: 176.98,
  },
  {
    id: 2,
    image: "/product-image-2.png",
    price: 126.98,
  },
  {
    id: 3,
    image: "/product-image-3.png",
    price: 136.98,
  },
  {
    id: 4,
    image: "/product-image-4.png",
    price: 146.98,
  },
  {
    id: 5,
    image: "/product-image-1.png",
    price: 156.98,
  },
  {
    id: 6,
    image: "/product-image-2.png",
    price: 166.98,
  },
  {
    id: 7,
    image: "/product-image-3.png",
    price: 176.98,
  },
  {
    id: 8,
    image: "/product-image-4.png",
    price: 166.98,
  },
  {
    id: 9,
    image: "/product-image-3.png",
    price: 176.98,
  },
  {
    id: 10,
    image: "/product-image-4.png",
    price: 126.98,
  },
  {
    id: 11,
    image: "/product-image-1.png",
    price: 136.98,
  },
  {
    id: 12,
    image: "/product-image-2.png",
    price: 146.98,
  },
  {
    id: 13,
    image: "/product-image-3.png",
    price: 156.98,
  },
  {
    id: 14,
    image: "/product-image-4.png",
    price: 166.98,
  },
  {
    id: 15,
    image: "/product-image-1.png",
    price: 176.98,
  },
];

export default function Page() {
  return (
    <div className={inter.className}>
      <Provider store={store}>
        <header>
          <TopBar />
          <div className="flex md:justify-center justify-between items-center relative h-16 px-5">
            <RxHamburgerMenu className="text-2xl md:hidden" />
            <Navigation />
          </div>
          <CartCount />
          <CartButton />
        </header>
        <HeroSlider products={products} />
        <ProductGrid products={products} />
      </Provider>
    </div>
  );
}
