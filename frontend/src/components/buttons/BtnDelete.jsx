export default function BtnDelete({ onClick, className = "" }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`absolute top-0 right-[5px] text-red-200 hover:text-red-600 text-xl 
                leading-none transition ${className}`}
            transition
            aria-label="Delete"
        >
            ×
        </button>
    );
}
