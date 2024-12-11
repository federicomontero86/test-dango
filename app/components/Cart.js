import { useDispatch, useSelector } from "react-redux";
import CartProductCard from "./CartProductCard";
import { clearCart, getCart, getTotalCartPrice } from "../store/cartSlice";

export default function Cart() {
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex flex-col justify-between h-full">
        <div>
          <div>
            <h3 className="text-green font-bold text-lg mb-2 mt-4">
              YOUR CART
            </h3>
          </div>

          <div className="mt-4">
            {cart.length === 0 && (
              <p className="text-lg">
                Your cart is still empty. Start adding some products!
              </p>
            )}

            {cart.length > 0 &&
              cart.map((item) => {
                return <CartProductCard product={item} key={item.id} />;
              })}
          </div>
        </div>
      </div>
      {cart.length > 0 && (
        <div className="mt-6">
          <div className="flex justify-between">
            <p className="font-bold">TOTAL</p>
            <p className="text-lightGreen font-bold">
              {totalCartPrice.toFixed(2)}
            </p>
          </div>
          <div className="flex items-center gap-3 mt-5">
            <button className="bg-green text-white px-3 py-[2px] h-fit rounded-2xl shadow hover:scale-105 transition-all duration-300 cursor-pointer">
              PLACE ORDER
            </button>
            <button
              onClick={() => dispatch(clearCart())}
              className="bg-white text-green border-lightGreen border-2 px-3 py-[0.5px] h-fit rounded-2xl shadow hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              CLEAR CART
            </button>
          </div>
        </div>
      )}
    </>
  );
}
