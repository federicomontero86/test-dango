import { RxCross2 } from "react-icons/rx";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  const handleCloseModal = () => {
    onClose(true);
  };
  return (
    <div className="absolute top-64 inset-0 flex items-center justify-center z-50">
      <div className="bg-white w-96 rounded-3xl shadow-lg p-6 relative mx-6">
        <button
          className="absolute top-4 right-4 text-black"
          onClick={handleCloseModal}
        >
          <RxCross2 />
        </button>
        {children}
      </div>
    </div>
  );
}
