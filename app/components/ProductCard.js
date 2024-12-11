import Image from "next/image";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const { id, image, price } = product;
  function handleAddToCart() {
    const newItem = {
      id,
      image,
      unitPrice: price,
      quantity: 1,
      totalPrice: price * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <div className="bg-white rounded-3xl shadow-[4px_4px_8px_2px_rgba(0,0,0,0.3)] flex flex-col p-4 m-0 md:h-[324px] md:w-[223px] h-[240px] w-[154px] mb-6">
      <div className="relative mb-2 bg-green-500 overflow-hidden">
        <Image
          src={product.image}
          alt={product.image}
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center items-center flex-grow">
        <p className="sm:block mb-1 text-[16px] sm:mb-2">{product.price}</p>
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <div
            className="bg-green text-white px-3 py-[2px] h-fit rounded-2xl shadow hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={handleAddToCart}
          >
            <span className="text-shadow font-light">BUY NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
}
