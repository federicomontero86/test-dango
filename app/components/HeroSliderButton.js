export default function HeroSliderButton({ style, children, textStyle }) {
  console.log(style);
  return (
    <button
      className={`${style} text-[13px] leading-4 font-light md:font-normal p-4 rounded-[10px]  w-[185px] hover:scale-105 transition-all  duration-300`}
    >
      <div className={`${textStyle}  flex items-center`}>{children}</div>
    </button>
  );
}
