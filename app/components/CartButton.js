"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";
import Cart from "./Cart";

export default function CartButton() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <button
        className="absolute right-6 top-11"
        onClick={() => setIsOpenModal((currState) => !currState)}
      >
        <Image
          src="/cart-logo.png"
          className="h-6 w-6"
          aria-hidden="true"
          width={125}
          height={125}
          alt="Cart"
          quality={100}
        />
      </button>
      {isOpenModal && (
        <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
          <Cart />
        </Modal>
      )}
    </>
  );
}
