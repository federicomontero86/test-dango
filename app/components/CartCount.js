import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "../store/cartSlice";

export default function CartCount() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  if (!totalCartQuantity) return null;

  return (
    <div className="bg-white text-green border-2 border-green text-xs rounded-full p-2 w-5 h-5 text-center flex justify-center items-center absolute right-10 top-10 z-10">
      {totalCartQuantity}
    </div>
  );
}
