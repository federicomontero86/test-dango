import {
  FaArrowLeft,
  FaArrowLeftLong,
  FaArrowRight,
  FaArrowRightLong,
} from "react-icons/fa6";

export default function HeroArrowButton({ variant, currentSlide }) {
  let first =
    currentSlide === 0
      ? "text-green border-2 pointer-events-none"
      : "text-white bg-green border-2 border-green";
  let last =
    currentSlide === 2
      ? "text-green border-2 pointer-events-none"
      : "text-white bg-green border-2 border-green";
  let style =
    variant === "left" ? `arrow-left ${first}` : `arrow-right ${last}`;
  return (
    <div
      className={`${style} w-fit px-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-300 flex items-center`}
    >
      {variant === "right" ? (
        <FaArrowRight className="w-7 h-8" />
      ) : (
        <FaArrowLeft className="w-7 h-8 " />
      )}
    </div>
  );
}
