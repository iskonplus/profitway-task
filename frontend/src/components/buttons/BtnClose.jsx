export default function BtnClose({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-gray-500 text-xl leading-none"
      aria-label="Close"
    >
      <span className="hover:text-gray-800 transition">×</span>
    </button>
  );
}
