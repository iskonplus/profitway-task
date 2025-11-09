export default function BtnClose({ onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="text-gray-500 hover:text-gray-800 text-xl leading-none"
            aria-label="Close"
        >
            <span className="hover:text-red-600 transition">×</span>
        </button>
    )

}