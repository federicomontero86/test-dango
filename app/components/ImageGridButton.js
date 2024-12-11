import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function ImageGridButton({ variant, handleAction, style }) {
  return (
    <button
      className={`w-fit px-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-300 flex items-center border-2 ${style}`}
      onClick={handleAction}
    >
      {variant === "right" ? (
        <FaArrowRight className="w-7 h-8" />
      ) : (
        <FaArrowLeft className="w-7 h-8 " />
      )}
    </button>
  );
}
