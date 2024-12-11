import Image from "next/image";
import { useDispatch } from "react-redux";
import { deleteItem } from "../store/cartSlice";
import { RxCross2 } from "react-icons/rx";

export default function CartProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="w-full border-b-2 border-b-green-100 flex justify-between items-center py-2">
      <Image
        src={product.image}
        alt={product.image}
        width={50}
        height={50}
        className="w-9 h-9 object-cover"
      />
      <p className="text-sm">
        <span className="text-sm text-gray-500 ml-1">
          (x{product.quantity})
        </span>
      </p>
      <p className="text-lightGreen font-bold">
        ${product.totalPrice.toFixed(2)}
      </p>
      <button onClick={() => dispatch(deleteItem(product.id))}>
        <RxCross2 />
      </button>
    </div>
  );
}
