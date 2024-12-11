"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import ImageGridButton from "./ImageGridButton";

const PRODUCTS_PER_PAGE = 8;
const INITIAL_PAGE = 1;

export default function ProductGrid({ products }) {
  const [page, setPage] = useState(INITIAL_PAGE);

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  console.log({ totalPages: totalPages });
  console.log({ page: page });

  const handlePrevPage = () => {
    setPage((currState) => (currState <= 1 ? 1 : currState - 1));
  };
  const handleNextPage = () =>
    setPage((currState) =>
      currState >= totalPages ? currState : currState + 1
    );

  const displayedProducts =
    page === 1 ? products.slice(0, PRODUCTS_PER_PAGE) : products.slice(8);

  return (
    <div className="flex justify-center">
      <div className="w-[1000px]">
        <h2 className="text-center text-[29px] text-lightGreen font-bold mt-10 mb-5">
          Featured Collection
        </h2>
        <div className=" pt-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-items-center mx-2">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className="relative flex gap-2 mt-4 md:mt-10 justify-center mb-8">
          <ImageGridButton
            variant="left"
            handleAction={handlePrevPage}
            page={page}
            style={
              page === INITIAL_PAGE
                ? "text-green bg-white"
                : "text-white bg-green border-2 border-green"
            }
          />
          <ImageGridButton
            variant="right"
            handleAction={handleNextPage}
            page={page}
            style={
              page === totalPages
                ? "text-green bg-white"
                : "text-white bg-green border-2 border-green"
            }
          />
        </div>
      </div>
    </div>
  );
}
